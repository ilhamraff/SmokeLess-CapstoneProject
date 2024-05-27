import API_ENDPOINT from "../globals/api-endpoint";

class ArticleSource {
  static async getArticle() {
    try {
      const response = await fetch(API_ENDPOINT.GET_ARTICLE);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

export default ArticleSource;
