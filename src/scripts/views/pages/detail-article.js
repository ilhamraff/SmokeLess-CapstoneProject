import ArticleSource from "../../data/article-source";
import UrlParser from "../../routes/url-parser";
import { createDetailArticleSection } from "../templates/template";

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

    const detailContainer = document.querySelector(".detail-container");
    if (article) {
      detailContainer.innerHTML += createDetailArticleSection(article);
    } else {
      detailContainer.innerHTML =
        "<p>Artikel tidak ditemukan atau terjadi kesalahan saat mengambil data.</p>";
    }
  },
};

export default Detail;
