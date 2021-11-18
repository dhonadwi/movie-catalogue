import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";

const routes = {
  "": NowPlaying,
  "now-playing": NowPlaying,
  upcoming: Upcoming,
  detail: Detail,
  split: () => {
    const url = window.location.hash.slice(1).toLowerCase();
    return url.split("/");
  },
};

export default routes;
