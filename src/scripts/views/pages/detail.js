import TheMovieDbSource from "../../data/themoviedb-source";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import { createMovieDetailTemplate } from "../templates/template-creator";
import routes from "../../routes/routes";

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
    <div id="likeButtonContainer">
    <h1>Loading...</h1></div>
    `;
  },

  async afterRender() {
    const url = routes.split();
    const id = url[1];
    const movie = await TheMovieDbSource.detailMovie(id);
    const movieContainer = document.querySelector("#movie");
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
      },
    });
  },
};

export default Detail;
