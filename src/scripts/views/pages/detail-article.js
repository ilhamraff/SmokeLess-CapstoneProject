import ArticleSource from '../../data/article-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return '<h2>Detail Artikel</h2>';
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await ArticleSource.getDetailArticle(url.id);
    console.log(article);
  },
};

export default Detail;
