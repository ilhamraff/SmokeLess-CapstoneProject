import ArticleSource from "../../data/article-source";
import CommentSource from "../../data/comment-source";
import HomeSource from "../../data/home-source";
import AddComment from "../../utils/comment-handler";
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
            <a href="#cigarette">Baca Selengkapnya  
              <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div class="content-image">
            <img src="./images/home.png" alt="Logo" />
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

      const commentSection = document.querySelector("#comment");
      commentSection.innerHTML += createCommentSection();

      const comments = await CommentSource.getComment();
      const commentsArray = Object.values(comments);
      const commentsContainer = document.querySelector("#comment-list");
      commentsArray.forEach((comment) => {
        commentsContainer.innerHTML += createCommentItem(comment);
      });

      const addComment = document.getElementById("comment-form");
      addComment.addEventListener("submit", async (event) => {
        event.preventDefault();

        const comentatorName = document.getElementById("commentatorName").value;
        const comentatorComment =
          document.getElementById("commentatorComment").value;
        const date = new Date().toISOString().split("T")[0];

        const commentData = {
          name: comentatorName,
          comment: comentatorComment,
          date,
        };

        try {
          const data = await AddComment.addComment(commentData);

          if (data && data.name) {
            AddComment.renderComment(commentData);

            document.getElementById("commentatorName").value = "";
            document.getElementById("commentatorComment").value = "";
          } else {
            console.error("Unexpected data format:", data);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      });
    } catch (error) {
      console.error("Error rendering: ", error);
    }
  },
};

export default Home;
