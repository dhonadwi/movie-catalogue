import ApiSource from '../data/api';
import FavoriteMovieIdb from '../data/favoritemovie-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';
import Users from './users';
import { Spinner } from 'spin.js';

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

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie, spinner }) {
    const idUser = await Users.getCookie('id');
    this._likeButtonContainer = likeButtonContainer;
    this._spinner = spinner;
    movie.user = idUser;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      spinner.spin(document.getElementById('spinner'));
      this._spinner.style.display = 'block';
      await FavoriteMovieIdb.putMovie(this._movie);
      await ApiSource.like(this._movie);
      this._renderButton();
      spinner.stop();
      this._spinner.style.display = 'none';
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      spinner.spin(document.getElementById('spinner'));
      this._spinner.style.display = 'block';
      await FavoriteMovieIdb.deleteMovie(this._movie.id);
      await ApiSource.deleteLike(this._movie);
      this._renderButton();
      spinner.stop();
      this._spinner.style.display = 'none';
    });
  },
};

export default LikeButtonInitiator;
