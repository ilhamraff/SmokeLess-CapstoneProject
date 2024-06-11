/* eslint-disable max-len */
/**
 * DrawerInitiator adalah objek yang bertanggung jawab untuk
 * menginisialisasi fungsi pembuka dan penutup drawer (menu geser).
 */
const DrawerInitiator = {
  /**
   * Menginisialisasi event listener untuk membuka dan menutup drawer.
   * @param {Object} config - Konfigurasi yang diperlukan untuk inisialisasi.
   * @param {HTMLElement} config.button - Elemen tombol yang digunakan untuk membuka drawer.
   * @param {HTMLElement} config.drawer - Elemen drawer yang akan dibuka dan ditutup.
   * @param {HTMLElement} config.content - Elemen konten utama yang digunakan untuk menutup drawer ketika diklik.
   */
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  /**
   * Membuka atau menutup drawer dengan toggle kelas 'aktif'.
   * @param {Event} event - Event yang memicu fungsi ini.
   * @param {HTMLElement} drawer - Elemen drawer yang akan dibuka atau ditutup.
   */
  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('aktif');
  },

  /**
   * Menutup drawer dengan menghapus kelas 'aktif'.
   * @param {Event} event - Event yang memicu fungsi ini.
   * @param {HTMLElement} drawer - Elemen drawer yang akan ditutup.
   */
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('aktif');
  },
};

export default DrawerInitiator;
