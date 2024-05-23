import "regenerator-runtime";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/home-style.css";
import "../styles/about-style.css"
import App from "./views/app";

const app = new App({
  button: document.querySelector(".tombol"),
  drawer: document.querySelector(".menu"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
