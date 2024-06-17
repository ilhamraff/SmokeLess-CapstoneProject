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

export default PageScroll;
