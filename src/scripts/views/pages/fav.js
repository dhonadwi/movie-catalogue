import ApiSource from '../../data/api';
import { createMovieItemTemplateDb } from '../templates/template-creator';
import { Spinner } from 'spin.js';

const Fav_Db = {
  async render() {
    return `
    <div class="content">
     <div id="spinner"></div>
    <h2 class="content__heading">Your Fav Movies</h2>
    <div id="movies" class="movies">

    </div>
  </div>
    `;
  },

  async afterRender() {
    const spinner = new Spinner({
      lines: 10,
      length: 6,
      width: 3,
      radius: 6,
      color: 'black',
      animation: 'spinner-line-fade-quick',
      // lines: 13, // The number of lines to draw
      // length: 38, // The length of each line
      // width: 17, // The line thickness
      // radius: 45, // The radius of the inner circle
      scale: 1, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      speed: 1, // Rounds per second
      rotate: 0, // The rotation offset
      animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      // color: '#ffffff', // CSS color or array of colors
      // fadeColor: 'transparent', // CSS color or array of colors
      // top: '50%', // Top position relative to parent
      // left: '50%', // Left position relative to parent
      // shadow: '0 0 1px transparent', // Box-shadow for the lines
      // // zIndex: 2000000000, // The z-index (defaults to 2e9)
      className: 'spinner', // The CSS class to assign to the spinner
      // position: 'absolute', // Element positioning
    });
    // spinner.spin(document.getElementById('spinner'));
    // document.getElementById('spinner').style.display = 'none';
    spinner.spin(document.getElementById('spinner'));
    document.getElementById('spinner').style.display = 'block';
    const movies = await ApiSource.getAllMovie();
    console.log(movies);
    const ada = movies.data.length;
    const moviesContainer = document.querySelector('#movies');
    if (ada >= 1) {
      movies.data.forEach((movie) => {
        moviesContainer.innerHTML += createMovieItemTemplateDb(movie);
      });
      spinner.stop();
      document.getElementById('spinner').style.display = 'none';
    } else {
      spinner.stop();
      document.getElementById('spinner').style.display = 'none';
      moviesContainer.innerHTML = "<h1>You don't have Favorite movies</h1>";
    }
  },
};

export default Fav_Db;
