const DrawerInitiator = {
  init({ button, drawer, content, tags }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    tags.forEach((tag) => {
      tag.addEventListener("click", (event) => {
        this._closeDrawer(event, drawer);
        this._scroll();
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },

  _scroll() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  },
};

export default DrawerInitiator;
