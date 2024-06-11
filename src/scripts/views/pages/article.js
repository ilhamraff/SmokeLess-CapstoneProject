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

      for (const [id, article] of Object.entries(articles)) {
        const card = document.createElement('div');
        card.className = 'article-item';
        card.dataset.id = id;
        console.log(article);
        console.log(id);

        card.innerHTML = createArticleCard(article, id);

        card.addEventListener('click', () => {
          window.location.hash = `#/detail/${id}`;
        });

        articlesContainer.appendChild(card);
      }
    } catch (error) {
      console.error('Error rendering articles:', error);
    }
  },
};

export default Article;
