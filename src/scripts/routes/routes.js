import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";
import Favorites from "../views/pages/favorites";

const routes = {
  "": NowPlaying,
  "now-playing": NowPlaying,
  upcoming: Upcoming,
  detail: Detail,
  favorites: Favorites,
  split: () => {
    const url = window.location.hash.slice(1).toLowerCase();
    return url.split("/");
  },
};

export default routes;
