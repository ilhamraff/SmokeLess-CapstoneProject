import PageScroll from '../../utils/scroll-handler';

const About = {
  async render() {
    return `
        <section class="about-us">
            <div class="gambar hidden">
                <img class="lazyload" src="/images/Logo.png" alt="Logo SmokeLess">
            </div>
            <p class="hidden">Website informasi layanan berhenti merokok</p>
            <h2 class="hidden">"Perubahan Dimulai Dari <i>Dirimu Sendiri</i>"</h2>
        </section>

        <section class="about-website" id="content">
            <article class="about-container hidden">
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
            </article>    
        </section>

        <section class="about-dev hidden">
            <h1>Informasi Tentang Kontak</h1>
            <p>
                Ingin mengetahui alasan, atau pengembangan aplikasi lebih lanjut kedepannya
                dapat menghubungi salah satu dari kami, atau apabila ingin melakukan kerja sama
                dapat menghubungi salah satu dari kami ya. Terima Kasih
            </p>
            <div class="dev-container">
                <div class="card-dev">
                    <div class="dev-picture">
                        <img class="lazyload" src="images/potoAldova.png" alt="Foto Aldova Ferdiansyah" />
                    </div>
                    <h3 class="dev-title">Aldova Ferdiansyah</h3>
                    <div class="icon-picture">
                        <a href="https://www.instagram.com/aldovaaa__?igsh=MTRsc2hoaDJnY3FpbA=="><img
                                src="images/instagramLogo.png" alt="Logo Instagram"></a>
                        <a href="https://github.com/aldovaferdiansyah"><img src="images/githubLogo.png"
                                alt="Logo Github"></a>
                        <a href="https://www.linkedin.com/in/aldova-ferdiansyah-94b393220/"><img
                                src="images/linkedinLogo.png" alt="Logo linkedin"></a>
                    </div>
                </div>
                <div class="card-dev">
                    <div class="dev-picture">
                        <img class="lazyload" src="images/potoHarfin.png" alt="Foto Harfin Aqbil Falah " />
                    </div>
                    <h3 class="dev-title">Harfin Aqbil Falah</h3>
                    <div class="icon-picture">
                        <a href="https://www.instagram.com/harfinnnn_afff?igsh=c25rNHJqYWV0emkw"><img
                                src="images/instagramLogo.png" alt="Logo Instagram"></a>
                        <a href="https://github.com/Harfinnn"><img src="images/githubLogo.png" alt="Logo Github"></a>
                        <a href="https://www.linkedin.com/in/harfin-aqbil-falah-701502220/"><img
                                src="images/linkedinLogo.png" alt="Logo linkedin"></a>
                    </div>
                </div>
                <div class="card-dev">
                    <div class="dev-picture">
                        <img class="lazyload" src="images/potoIlham.png" alt="Foto Ilham Rafi Fadhilah" />
                    </div>
                    <h3 class="dev-title">Ilham Rafi Fadhilah</h3>
                    <div class="icon-picture">
                        <a href="https://www.instagram.com/ilhamraff_/"><img src="images/instagramLogo.png"
                                alt="Logo Instagram"></a>
                        <a href="https://github.com/ilhamraff"><img src="images/githubLogo.png" alt="Logo Github"></a>
                        <a href="https://www.linkedin.com/in/ilham-rafi-fadhilah-850469188/"><img
                                src="images/linkedinLogo.png" alt="Logo linkedin"></a>
                    </div>
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    PageScroll.init();
  },
};

export default About;
