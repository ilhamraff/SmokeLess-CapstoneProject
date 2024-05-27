import API_ENDPOINT from "../globals/api-endpoint";

class ArticleSource {
  static async getArticle() {
    try {
      const response = await fetch(API_ENDPOINT.GET_ARTICLE);
      const responseJson = await response.json();
      return responseJson.results;
    } catch (error) {
      console.error(error);
    }
  }
}

export default ArticleSource;
