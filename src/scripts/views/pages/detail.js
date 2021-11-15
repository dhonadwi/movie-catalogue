import TheMovieDbSource from "../../data/themoviedb-source";
import { createMovieDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash;
    const id = url.split("/");
    console.log(id[1]);
    const movie = await TheMovieDbSource.detailMovie(id[1]);
    // console.log(movie);
    const movieContainer = document.querySelector("#movie");
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
  },
};

export default Detail;
