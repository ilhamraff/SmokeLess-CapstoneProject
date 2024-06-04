import API_ENDPOINT from "../globals/api-endpoint";

class CommentSource {
  static async getComment() {
    try {
      const response = await fetch(API_ENDPOINT.COMMENTS);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

export default CommentSource;
