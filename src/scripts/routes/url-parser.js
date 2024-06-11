/**
 * UrlParser adalah objek yang menyediakan metode-metode untuk mem-parsing URL yang sedang aktif.
 */
const UrlParser = {
  /**
   * Mem-parsing URL aktif dengan menggunakan fungsi _urlSplitter untuk memecah URL menjadi bagian-bagian yang relevan,
   * kemudian menggunakan _urlCombiner untuk menggabungkan kembali bagian-bagian tersebut menjadi URL yang sesuai.
   * @returns {string} URL yang telah di-parsing dan digabungkan.
   */
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  /**
   * Mem-parsing URL aktif tanpa menggunakan fungsi _urlCombiner.
   * @returns {Object} Objek yang berisi bagian-bagian yang telah di-parsing dari URL aktif.
   */
  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1);
    const urlsSplits = url.split("/");

    // Menggunakan `decodeURIComponent` untuk mempertahankan huruf besar kecil asli
    const id = decodeURIComponent(urlsSplits[2]) || null;

    return {
      resource: urlsSplits[1] || null,
      id: id,
      verb: urlsSplits[3] || null,
    };
  },

  /**
   * Fungsi internal untuk mem-parsing URL menjadi bagian-bagian yang relevan.
   * @param {string} url - URL yang akan di-parsing.
   * @returns {Object} Objek yang berisi bagian-bagian yang telah di-parsing dari URL.
   */
  _urlSplitter(url) {
    const urlsSplits = url.split("/");
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  /**
   * Fungsi internal untuk menggabungkan kembali bagian-bagian URL yang telah di-parsing menjadi URL yang sesuai.
   * @param {Object} splitedUrl - Objek yang berisi bagian-bagian URL yang telah di-parsing.
   * @returns {string} URL yang telah di-gabungkan kembali.
   */
  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : "/") +
      (splitedUrl.id ? "/:id" : "") +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : "")
    );
  },
};

export default UrlParser;
