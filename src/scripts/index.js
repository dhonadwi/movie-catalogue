import "regenerator-runtime";
import "../styles/style.css";
import "../styles/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
  tags: document.querySelectorAll("a"),
});

// const cek = document.querySelectorAll("a");

// cek.forEach((taga) => {
//   taga.addEventListener("click", () => {
//     alert("hahaa");
//   });
// });

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
