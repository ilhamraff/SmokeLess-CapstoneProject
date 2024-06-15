/* eslint-disable no-inner-declarations */
/* eslint-disable no-restricted-syntax */
import ArticleSource from '../../data/article-source';
import { createArticleCard } from '../templates/template';

const Article = {
  async render() {
    return `
    <section class="article-content">
        <div class="article-headline">
          <h1>Kumpulan Artikel Lainnya</h1>
          <p>
            Berikut adalah beberapa referensi lainnya mengenai pembahasan
            seputar bahaya merokok, sejarah merokok dan lain sebagainya, anda
            dapat membaca dengan seksama dari beberapa artikel yang telah kami
            rekomendasikan pada halaman ini, selamat membaca.
          </p>
        </div>
        <input type="text" id="searchInput" placeholder="Cari Artikel..." />
        <div class="go-to-add">
          <i class="fa fa-plus" aria-hidden="true"></i>
          <a href="#/add-article">Buat Artikel</a>
        </div> 
        <div class="articles-container" id="articles"></div>
    </section>
`;
  },

  async afterRender() {
    try {
      const articles = await ArticleSource.getArticle(); // Ubah objek menjadi array
      const articlesContainer = document.querySelector('#articles');
      const searchInput = document.querySelector('#searchInput');

      function renderArticles(filteredArticles) {
        articlesContainer.innerHTML = ''; // Kosongkan kontainer artikel terlebih dahulu
        for (const [id, article] of Object.entries(filteredArticles)) {
          const card = document.createElement('div');
          card.className = 'article-item';
          card.dataset.id = id;

          card.innerHTML = createArticleCard(article, id);

          card.addEventListener('click', () => {
            window.location.hash = `#/detail/${id}`;
          });

          articlesContainer.appendChild(card);
        }
      }

      renderArticles(articles);

      searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredArticles = Object.entries(articles)
          .filter(([id, article]) => article.title.toLowerCase().includes(searchTerm));

        renderArticles(Object.fromEntries(filteredArticles));
      });
    } catch (error) {
      console.error('Error rendering articles:', error);
    }
  },

};

export default Article;
