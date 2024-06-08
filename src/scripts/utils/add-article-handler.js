import API_ENDPOINT from '../globals/api-endpoint';

const AddArticleHandler = {
  async addArticle(articleData) {
    try {
      const response = await fetch(API_ENDPOINT.ARTICLE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
    } catch (error) {
      console.error('Error Adding Article: ', error);
    }
  },

  renderArticle(article) {
    const truncatedContent = article.content.length > 100
      ? `${article.content.substring(0, 100)} ...`
      : article.content;
    const articleList = document.querySelector('.articles-container');
    const articleItem = document.createElement('div');
    articleItem.classList.add('article-item');
    articleItem.innerHTML = `
    <h2>${article.title}</h2>
    <p>${truncatedContent}</p>
    <a href="/#/detail/${article.id}">Baca Selengkapnya  
      <i class="fa fa-long-arrow-right"></i>
    </a>`;
    articleList.appendChild(articleItem);
  },
};

export default AddArticleHandler;
