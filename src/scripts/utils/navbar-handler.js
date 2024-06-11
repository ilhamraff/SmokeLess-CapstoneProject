/**
 * NavbarScroll adalah objek yang bertanggung jawab untuk mengatur visibilitas navbar saat pengguna menggulir halaman.
 */
const NavbarScroll = {
  /**
   * Menginisialisasi event listener untuk menangani perubahan posisi scroll dan mengatur visibilitas navbar.
   */
  init() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-85px";
      }
      prevScrollpos = currentScrollPos;
    };
  },
};

export default NavbarScroll;
