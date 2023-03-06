import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import Login from '../views/pages/Login';
import Fav_Db from '../views/pages/fav';
import Register from '../views/pages/register';

const routes = {
  '': NowPlaying,
  'now-playing': NowPlaying,
  upcoming: Upcoming,
  detail: Detail,
  favorites: Favorites,
  login: Login,
  fav: Fav_Db,
  register: Register,
  split: () => {
    const url = window.location.hash.slice(1).toLowerCase();
    return url.split('/');
  },
};

export default routes;
