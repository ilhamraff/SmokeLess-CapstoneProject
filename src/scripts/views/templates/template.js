const createArticleCard = (article) => {
  return `
    <h2>${article.title}</h2>
    <p><strong>Author:</strong> ${article.author}</p>
    <p>${article.content}</p>`;
};

export { createArticleCard };
