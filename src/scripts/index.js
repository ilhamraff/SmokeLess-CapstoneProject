import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/home-style.css';
import '../styles/home-responsive.css';
import '../styles/article-style.css';
import '../styles/add-article-style.css';
import '../styles/about-style.css';
import '../styles/about-responsive.css';
import '../styles/detail-style.css';
import '../styles/detail-responsive.css';
import '../styles/survey-style.css';
import '../styles/survey-responsive.css';

import 'animate.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import firebase from 'firebase/app';
import 'firebase/storage';

import App from './views/app';
import swRegister from './utils/sw-register';

/**
 * Inisialisasi aplikasi dan pengaturan event listener untuk perubahan hash dan pemuatan halaman.
 */
const app = new App({
  button: document.querySelector('.tombol'),
  drawer: document.querySelector('.menu'),
  content: document.querySelector('#mainContent'),
});

/**
 * Event listener untuk perubahan hash di URL.
 * Ketika hash berubah, panggil method renderPage pada objek app untuk merender halaman yang sesuai.
 */
window.addEventListener('hashchange', () => {
  app.renderPage();
});

/**
 * Event listener untuk pemuatan halaman.
 * Ketika halaman selesai dimuat, panggil method renderPage
 * pada objek app dan daftar service worker.
 */
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
