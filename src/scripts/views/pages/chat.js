// import TheMovieDbSource from '../../data/themoviedb-source';
// import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
    <div class="wrapper">
    <section class="chat-area">
      <header>

        <a href="#now-playing" class="back-icon"><i class="fas fa-arrow-left"></i></a>
        <img src="" alt="">
        <div class="details">
          <span>Nama</span>
          <p>Status</p>
        </div>
      </header>
      <div class="chat-box">

      </div>
      <form action="#" class="typing-area" method="POST">
        <input type="text" class="incoming_id" name="incoming_id" value="user_id" hidden>
        <input type="text" name="message" class="input-field" placeholder="Type a message here..." autocomplete="off">
        <button><i class="fab fa-telegram-plane"></i></button>
      </form>
    </section>
  </div>
    `;
  },

  async afterRender() {
    const form = document.querySelector('.typing-area'),
      incoming_id = form.querySelector('.incoming_id').value,
      inputField = form.querySelector('.input-field'),
      sendBtn = form.querySelector('button'),
      chatBox = document.querySelector('.chat-box');
    form.onsubmit = (e) => {
      e.preventDefault();
    };
    // const movies = await TheMovieDbSource.nowPlayingMovies();
    // const moviesContainer = document.querySelector('#movies');
    // // console.log(movies);
    // movies.results.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
  },
};

export default NowPlaying;
