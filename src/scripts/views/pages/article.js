const Article = {
  async render() {
    return `
    <section class="about-us">
        <h1>Kumpulan Artikel Lainnya</h1>
        <p>
            Berikut adalah beberapa referensi lainnya mengenai pembahasan
            seputar bahaya merokok, sejarah merokok dan lain sebagainya,
            anda dapat membaca dengan seksama dari beberapa artikel yang telah
            kami rekomendasikan pada halaman ini, selamat membaca.
        </p>
    </section>
`;
  },

  async afterRender() {},
};

export default Article;
