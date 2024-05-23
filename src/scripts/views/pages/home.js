const Home = {
  async render() {
    return `
    <section class="content" id="welcome">
        <article class="welcome-content">
          <div class="content-description">
            <h1 class="title">SELAMAT DATANG</h1>
            <p>
              Bersama Kami Berhenti Merokok<br />
              dan Menuju Hidup yang Lebih Sehat
            </p>
            <button>Baca Selengkapnya</button>
          </div>
          <div class="content-image">
            <img src="./images/1.png" alt="Dicoding Indonesia" />
          </div>
        </article>
    </section>`;
  },

  async afterRender() {},
};

export default Home;
