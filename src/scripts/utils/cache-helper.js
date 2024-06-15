import CONFIG from '../globals/config';

/**
 * CacheHelper adalah objek yang menyediakan fungsi untuk mengelola cache aplikasi.
 */
const CacheHelper = {
  /**
   * Caches the specified application shell resources.
   * @param {Array} requests - Daftar permintaan yang akan di-cache.
   */
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  /**
   * Menghapus cache lama yang tidak lagi digunakan.
   */
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  /**
   * Memvalidasi ulang cache untuk permintaan yang diberikan.
   * Jika permintaan ada dalam cache, ia akan mengembalikan
   * respons cache dan memperbarui cache di latar belakang.
   * Jika tidak, ia akan mengambil permintaan dari jaringan dan menyimpannya di cache.
   * @param {Request} request - Permintaan yang akan divalidasi ulang cache-nya.
   * @returns {Promise<Response>} Respons dari cache atau jaringan.
   */
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  /**
   * Membuka cache aplikasi.
   * @returns {Promise<Cache>} Objek cache yang terbuka.
   * @private
   */
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  /**
   * Mengambil permintaan dari jaringan dan menyimpannya di cache.
   * @param {Request} request - Permintaan yang akan diambil dari jaringan.
   * @returns {Promise<Response>} Respons dari jaringan.
   * @private
   */
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  /**
   * Menambahkan permintaan ke cache.
   * @param {Request} request - Permintaan yang akan ditambahkan ke cache.
   * @private
   */
  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;
