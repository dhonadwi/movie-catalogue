import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import Users from '../utils/users';

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
    const url = routes.split();
    // const urlSplit = url.split("/");
    const page = routes[url[0]];
    const cekCookie = await Users.cookie();
    if (cekCookie) {
      if (url[0] == 'login') {
        this._content.innerHTML = await routes.favorites.render();
        await routes.favorites.afterRender();
        return;
      }
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      this._content.innerHTML = await routes.login.render();
      await routes.login.afterRender();
      // await Users.setCookie('id', 'dhona', 1);
    }
  }
}

export default App;
