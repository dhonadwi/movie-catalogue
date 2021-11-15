import DrawerInitiator from "../utils/drawer-initiator";
import routes from "../routes/routes";

class App {
  constructor({ button, drawer, content, tags }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._tags = tags;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      tags: this._tags,
    });
  }

  async renderPage() {
    const url = window.location.hash.slice(1).toLowerCase();
    const urlSplit = url.split("/");
    const page = routes[urlSplit[0]];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
