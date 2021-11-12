import DrawerInitiator from "../utils/drawer-initiator";

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
}

export default App;
