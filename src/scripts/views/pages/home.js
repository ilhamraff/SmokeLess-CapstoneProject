import ArticleSource from "../../data/article-source";
import CommentSource from "../../data/comment-source";
import HomeSource from "../../data/home-source";
import {
  crateCigaretteContentCard,
  createBenefitsCard,
  createCommentItem,
  createCommentSection,
  createDiseaseContainer,
} from "../templates/template";

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
    </section>

    <section class="content" id="cigarette">
        <article class="cigarette-content hidden">
          <h1>Apa saja sih Kandungan Rokok itu ?</h1>
          <div class="content-box">
            <div>
              <img src="images/content-side.png" alt="" />
            </div>
            <div class="card-container"></div>
          </div>
        </article>
    </section>

    <section class="content" id="disease">
      <article class="smoking-disease hidden">
        <h1>Sederet Masalah Kesehatan Yang Ditimbulkan</h1>
      </article>
    </section>

    <section class="content" id="benefits">
        <article class="benefits-content hidden">
          <div class="benefits-title">
            <h1>Mengapa Harus Berhenti Merokok ?</h1>
          </div>
          <div class="benefits-container"></div>
          <div class="benefit-conclusion">
            <h3>Apakah Anda Masih Ingin Merokok?</h3>
            <p>
              Berhenti dari Sekarang dan Rasakan Manfaatnya!<br />
              Ambil kendali atas kesehatan dan masa depan Anda
            </p>
          </div>
        </article>
    </section>

    <section class="content" id="comment"></section>`;
  },

  async afterRender() {
    try {
      const commentSection = document.querySelector("#comment");
      commentSection.innerHTML = createCommentSection();

      const contents = await HomeSource.getContent();
      const contentSection = document.querySelector(".card-container");
      contents.forEach((content) => {
        contentSection.innerHTML += crateCigaretteContentCard(content);
      });

      const diseases = await HomeSource.getDisease();
      const diseaseContainer = document.querySelector(".smoking-disease");
      diseases.forEach((disease) => {
        diseaseContainer.innerHTML += createDiseaseContainer(disease);
      });

      const benefits = await HomeSource.getBenefits();
      const benefitsSection = document.querySelector(".benefits-container");
      benefits.forEach((benefit) => {
        benefitsSection.innerHTML += createBenefitsCard(benefit);
      });

      const comments = await CommentSource.getComment();
      const commentsArray = Object.values(comments);
      const commentsContainer = document.querySelector("#comment-list");
      commentsArray.forEach((comment) => {
        commentsContainer.innerHTML += createCommentItem(comment);
      });
    } catch (error) {
      console.error("Error rendering: ", error);
    }
  },
};

export default Home;
