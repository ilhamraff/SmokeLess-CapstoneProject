const createArticleCard = (article) => {
  const truncatedContent =
    article.content.length > 100
      ? article.content.substring(0, 100) + "..."
      : article.content;
  return `
  <div class="article-item">
    <h2>${article.title}</h2>
    <p>${truncatedContent}</p>
    <a href="#">Baca Selengkapnya
      <i class="fa fa-long-arrow-right"></i>
    </a>
  </div>`;
};

const createCommentItem = (comment) => {
  return `
  <div class="comment-item">
    <h4>${comment.name}</h4>
    <p>${comment.comment}</p>
    <p>${comment.date}</p>
  </div>`;
};

export { createArticleCard, createCommentItem };
