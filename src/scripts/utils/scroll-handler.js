/* eslint-disable no-use-before-define */
/**
 * PageScroll adalah objek yang menangani animasi elemen halaman saat pengguna menggulir halaman.
 */
const PageScroll = {
  /**
   * Menginisialisasi IntersectionObserver untuk mengamati elemen yang tersembunyi dan
   * menambahkan/menghapus kelas animasi saat elemen tersebut masuk atau keluar dari viewport.
   */
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('animate__animated', 'animate__fadeIn');
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  },
};

/**
 * ScrollToTop
 * Menyediakan fungsi untuk menampilkan tombol "scroll to top"
 * saat pengguna melakukan scroll halaman ke bawah dan
 * mengembalikan pengguna ke bagian atas halaman saat tombol tersebut diklik.
 */
const ScrollToTop = {
  /**
   * Inisialisasi ScrollToTop.
   * Menambahkan event listener untuk klik pada tombol "scroll to top"
   */
  init() {
    const mybutton = document.getElementById('scroll-to-top');

    // Menambahkan event listener untuk klik pada tombol "scroll to top"
    mybutton.addEventListener('click', () => {
      topFunction();
    });

    /**
     * Fungsi untuk berpindah jendela ke bagian atas halaman.
     */
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
};

export { PageScroll, ScrollToTop };
