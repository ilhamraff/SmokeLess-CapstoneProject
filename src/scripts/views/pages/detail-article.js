/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import ArticleSource from '../../data/article-source';
import UrlParser from '../../routes/url-parser';
import {
  createArticleCardAside,
  createDetailArticleSection,
} from '../templates/template';

const Detail = {
  async render() {
    return `
    <section class="content" id="detail-article">
      <div class="detail-article">
        <div class="detail-content">
          <div class="detail-container"></div>
          <div class="detail-aside">
            <h3>Artikel Lainnya</h3>
            <div class="aside-content"></div>
          </div>
        </div>
      </div>      
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await ArticleSource.getDetailArticle(url.id);

    const detailContainer = document.querySelector('.detail-container');
    if (article) {
      detailContainer.innerHTML += createDetailArticleSection(article);
    } else {
      detailContainer.innerHTML = '<p>Artikel tidak ditemukan atau terjadi kesalahan saat mengambil data.</p>';
    }

    try {
      const articlesAside = await ArticleSource.getArticle();
      const articlesAsideContainer = document.querySelector('.aside-content');

      for (const [id, article] of Object.entries(articlesAside)) {
        const card = document.createElement('div');
        card.className = 'article-item-aside';
        card.dataset.id = id;
<<<<<<< HEAD
        console.log(article);
        console.log(id);
=======

>>>>>>> a322f5ac8620b078d59f8498e0cc75f74378b030
        card.innerHTML = createArticleCardAside(article, id);

        card.addEventListener('click', () => {
          window.location.hash = `#/detail/${id}`;
        });

        articlesAsideContainer.appendChild(card);
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default Detail;
