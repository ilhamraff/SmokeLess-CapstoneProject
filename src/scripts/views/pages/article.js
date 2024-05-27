import ArticleSource from "../../data/article-source";
import { createArticleCard } from "../templates/template";

const Article = {
  async render() {
    return `
    <section class="about-us">
        <h1>Kumpulan Artikel Lainnya</h1>
        <p>
            Berikut adalah beberapa referensi lainnya mengenai pembahasan
            seputar bahaya merokok, sejarah merokok dan lain sebagainya,
            anda dapat membaca dengan seksama dari beberapa artikel yang telah
            kami rekomendasikan pada halaman ini, selamat membaca.
        </p>
        <div id="articles"></div>
    </section>
`;
  },

  async afterRender() {
    try {
      const articles = await ArticleSource.getArticle();
      const articlesArray = Object.values(articles); // Ubah objek menjadi array
      const articlesContainer = document.querySelector("#articles");

      articlesArray.forEach((article) => {
        articlesContainer.innerHTML += createArticleCard(article);
      });
    } catch (error) {
      console.error("Error rendering articles:", error);
    }
  },
};

export default Article;
