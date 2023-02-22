import ApiSource from '../data/api';
import FavoriteMovieIdb from '../data/favoritemovie-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';
import Users from './users';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    const idUser = await Users.getCookie('id');
    this._likeButtonContainer = likeButtonContainer;
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
      // console.log(idUser);
      // await this._movie.user = idUser
      await FavoriteMovieIdb.putMovie(this._movie);
      const movie = await ApiSource.like(this._movie);
      console.log(`push db: ${JSON.stringify(movie)}`);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.deleteMovie(this._movie.id);
      const movie = await ApiSource.deleteLike(this._movie);
      console.log(movie);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
