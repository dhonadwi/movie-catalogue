import FavoriteMovieIdb from '../../data/favoritemovie-idb';
// import Users from '../../utils/users';
import { createMovieItemTemplate } from '../templates/template-creator';

const Favorites = {
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
    const movies = await FavoriteMovieIdb.getAllMovies();
    const ada = movies.length;
    const moviesContainer = document.querySelector('#movies');
    if (ada >= 1) {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createMovieItemTemplate(movie);
      });
    } else {
      moviesContainer.innerHTML = "<h1>You don't have Favorite movies</h1>";
    }
  },
};

export default Favorites;
