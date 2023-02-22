import ApiSource from '../../data/api';
import { createMovieItemTemplateDb } from '../templates/template-creator';

const Fav_Db = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Your Fav Movies</h2>
    <div id="movies" class="movies">

    </div>
  </div>
    `;
  },

  async afterRender() {
    // Users.cookie();
    // const movies = await FavoriteMovieIdb.getAllMovies();
    const movies = await ApiSource.getAllMovie();
    console.log(movies.data);
    const ada = movies.data.length;
    const moviesContainer = document.querySelector('#movies');
    if (ada >= 1) {
      movies.data.forEach((movie) => {
        moviesContainer.innerHTML += createMovieItemTemplateDb(movie);
      });
    } else {
      moviesContainer.innerHTML = "<h1>You don't have Favorite movies</h1>";
    }
  },
};

export default Fav_Db;
