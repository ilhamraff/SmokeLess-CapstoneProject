/* eslint-disable import/no-named-as-default */
/**
 * routes adalah objek yang memetakan URL path ke komponen halaman yang sesuai.
 */
import Home from '../views/pages/home';
import Article from '../views/pages/article';
import Detail from '../views/pages/detail-article';
import Survey from '../views/pages/survey';
import About from '../views/pages/about';
import AddArticle from '../views/pages/add-article';

const routes = {
  /**
   * Halaman beranda (home).
   * @type {Object}
   */
  '/': Home,

  /**
   * Halaman beranda (home).
   * @type {Object}
   */
  '/home': Home,

  /**
   * Halaman artikel.
   * @type {Object}
   */
  '/article': Article,

  /**
   * Halaman detail artikel dengan parameter ID.
   * @type {Object}
   */
  '/detail/:id': Detail,

  /**
   * Halaman survei.
   * @type {Object}
   */
  '/survey': Survey,

  /**
   * Halaman tentang (about).
   * @type {Object}
   */
  '/about': About,

  /**
   * Halaman untuk menambahkan artikel baru.
   * @type {Object}
   */
  '/add-article': AddArticle,
};

export default routes;
