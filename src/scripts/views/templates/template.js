const createArticleCard = (article) => {
  return `
  <div class="article-item">
    <h2>${article.title}</h2>
    <p><strong>Author:</strong> ${article.author}</p>
    <p>${article.content}</p>
  </div>`;
};

const createCommentItem = (comment) => {
  return `
  <div class="comment-item">
    <h4>${comment.username}</h4>
    <p>${comment.body}</p>
    <p>21/05/2024, 10:02:55 AM</p>
  </div>`;
};

export { createArticleCard, createCommentItem };
