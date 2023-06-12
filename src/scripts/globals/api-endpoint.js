import CONFIG from './config';

const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  VIDEO: (id) => `${CONFIG.BASE_URL}movie/${id}/videos?api_key=${CONFIG.KEY}`,
  location: `https://papuca.my.id/lokasi/`,
  login: `https://papuca.my.id/api/`,
  like: `https://papuca.my.id/api/like/`,
  register: `https://papuca.my.id/api/email/`,
  register_wa: `https://papuca.my.id/api/wa/`,
  send_wa: `https://api.fonnte.com/send`,
};

export default API_ENDPOINT;
