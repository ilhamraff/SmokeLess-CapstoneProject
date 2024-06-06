import API_ENDPOINT from "../globals/api-endpoint";

const AddArticleHandler = {
  async addArticle(articleData) {
    try {
      const response = await fetch(API_ENDPOINT.ARTICLE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });
    } catch (error) {}
  },
};
