import API_ENDPOINT from "../globals/api-endpoint";
/**
 * ArticleSource adalah kelas yang bertanggung jawab untuk mengambil data artikel dari server menggunakan API.
 */
class ArticleSource {
  /**
   * Mengambil daftar artikel dari server.
   * @returns {Promise<Object>} Objek yang berisi daftar artikel.
   */
  static async getArticle() {
    try {
      const response = await fetch(API_ENDPOINT.ARTICLE);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  /**
   * Mengambil detail artikel berdasarkan ID dari server.
   * @param {string} id - ID artikel yang ingin diambil detailnya.
   * @returns {Promise<Object|null>} Objek yang berisi detail artikel atau null jika gagal mengambil.
   */
  static async getDetailArticle(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_ARTICLE(id));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching article detail:", error);
      return null;
    }
  }
}

export default ArticleSource;
