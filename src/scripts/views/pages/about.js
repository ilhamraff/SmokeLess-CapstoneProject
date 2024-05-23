const About = {
    async render() {
      return `
        <section class="about-us">
            <div class="gambar">
                <img src="./img/Logo.png" alt="">
            </div>
            <p>Website informasi layanan berhenti merokok</p>
            <h2>"Perubahan Dimulai Dari <strong><i>Dirimu Sendiri</i></strong>"</h2>
        </section>

        <section class="about-website" id="content">
            <h1>Informasi Tentang Website</h1>
            <p>
                Prevalensi tinggi merokok di Indonesia, terutama di kalangan laki-laki dengan tingkat
                pendidikan dan ekonomi rendah, serta yang tinggal di perkotaan, menjadi masalah serius.
                Dampak negatifnya tidak hanya dirasakan secara individu, tetapi juga secara sosial.
                Meskipun ada upaya pengurangan, masih ada kesenjangan dalam kesadaran akan
                risiko kesehatan, pola konsumsi rokok yang tinggi, usia mulai merokok yang masih muda,
                dan pengaruh ekonomi terhadap keputusan merokok.
            </p>
            <p>
                Maka dari itu website ini dibangun untuk membantu menurunkan angka prevalensi
                pengguna rokok baik sebagai perokok aktif maupun pasif di wilayah ndonesia.
                Website ini memberikan fitur kalkulator atau survey tingkat kecanduan seseorang
                terhadap rokok, dengan memiliki tiga tingkatan yaitu tinggi, sedang, dan rendah.
                Website ini juga memberikan referensi bacaan yang rekomendasi dari artikel lainnya
                untuk mendukung para pengguna agar mulai berlatih mengurangi kecanduan rokok.
            </p>
        </section>

        <section class="about-dev">
            <h1>Informasi Tentang Kontak</h1>
            <p>
                Ingin mengetahui alasan, atau pengembangan aplikasi lebih lanjut kedepannya
                dapat menghubungi salah satu dari kami, atau apabila ingin melakukan kerja sama
                dapat menghubungi salah satu dari kami ya. Terima Kasih
            </p>
            <div class="dev-container">
                <div class="card-dev">
                    <div class="dev-picture">
                        <img src="./img/potoAldova.png" alt="Foto Aldova Ferdiansyah" />
                    </div>
                    <h3 class="dev-title">Aldova Ferdiansyah</h3>
                </div>
                <div class="card-dev">
                    <div class="dev-picture">
                        <img src="./img/potoHarfin.png" alt="Foto Harfin Aqbil Falah " />
                    </div>
                    <h3 class="dev-title">Harfin Aqbil Falah</h3>
                </div>
                <div class="card-dev">
                    <div class="dev-picture">
                        <img src="./img/potoIlham.png" alt="Foto Ilham Rafi Fadhilah" />
                    </div>
                    <h3 class="dev-title">Ilham Rafi Fadhilah</h3>
                </div>
            </div>
        </section>`;
    },
  
    async afterRender() {},
  };
  
  export default About;
  