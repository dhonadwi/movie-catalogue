import API_ENDPOINT from '../globals/api-endpoint';
import nowPlayingJson from '../data/nowPlaying.json';

class TheMovieDbSource {
  static async nowPlaying() {
    const response = await fetch('./nowPlaying.json');
    // console.log(nowPlayingJson);
    const responseJson = await response.json();
    return responseJson;
  }
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async getVideo(id) {
    const response = await fetch(API_ENDPOINT.VIDEO(id));
    return response.json();
  }
}

export default TheMovieDbSource;
