/**
 * API_ENDPOINT adalah objek yang berisi endpoint-endpoint API yang digunakan dalam aplikasi.
 */
import CONFIG from "./config";

const API_ENDPOINT = {
  /**
   * Endpoint untuk mengambil daftar artikel.
   * @type {string}
   */
  ARTICLE: `${CONFIG.BASE_URL}articles.json`,

  /**
   * Endpoint untuk mengambil daftar komentar.
   * @type {string}
   */
  COMMENTS: `${CONFIG.BASE_URL}comments.json`,

  /**
   * Membuat endpoint untuk mengambil detail artikel berdasarkan ID.
   * @param {string} id - ID artikel yang ingin diambil detailnya.
   * @returns {string} Endpoint untuk mengambil detail artikel.
   */
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}articles/${id}.json`,
};

export default API_ENDPOINT;
