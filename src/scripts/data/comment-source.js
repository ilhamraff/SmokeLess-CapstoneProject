import API_ENDPOINT from '../globals/api-endpoint';
/**
 * CommentSource adalah kelas yang bertanggung jawab untuk
 * mengambil data komentar dari server menggunakan API.
 */
class CommentSource {
  /**
   * Mengambil daftar komentar dari server.
   * @returns {Promise<Object>} Objek yang berisi daftar komentar.
   */
  static async getComment() {
    try {
      const response = await fetch(API_ENDPOINT.COMMENTS);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default CommentSource;
