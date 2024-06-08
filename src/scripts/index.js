import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/home-style.css';
import '../styles/home-responsive.css';
import '../styles/article-style.css';
import '../styles/add-article-style.css';
import '../styles/about-style.css';
import '../styles/about-responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.tombol'),
  drawer: document.querySelector('.menu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
