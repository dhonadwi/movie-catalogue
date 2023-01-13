import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';
import nowPlayingJson from '../../data/nowPlaying.json';

const NowPlaying = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    // const movies = await TheMovieDbSource.nowPlaying();
    const moviesContainer = document.querySelector('#movies');
    // console.log(movies);
    nowPlayingJson.results.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
