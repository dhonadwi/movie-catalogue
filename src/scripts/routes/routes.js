import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import Login from '../views/pages/Login';
import Fav_Db from '../views/pages/fav';
import Register from '../views/pages/register';
import Reset from '../views/pages/reset';
import Chat from '../views/pages/chat';

const routes = {
  '': NowPlaying,
  'now-playing': NowPlaying,
  upcoming: Upcoming,
  detail: Detail,
  favorites: Favorites,
  login: Login,
  fav: Fav_Db,
  register: Register,
  reset: Reset,
  chat: Chat,
  split: () => {
    const url = window.location.hash.slice(1).toLowerCase();
    return url.split('/');
  },
};

export default routes;
