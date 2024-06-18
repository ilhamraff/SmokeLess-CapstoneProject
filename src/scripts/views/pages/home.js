import CommentSource from '../../data/comment-source';
import HomeSource from '../../data/home-source';
import AddComment from '../../utils/comment-handler';
import { PageScroll, ScrollToTop } from '../../utils/scroll-handler';
import {
  crateCigaretteContentCard,
  createBenefitsCard,
  createCommentItem,
  createCommentSection,
  createDiseaseContainer,
} from '../templates/template';

const Home = {
  async render() {
    return `
    <section class="content" id="welcome">
        <article class="welcome-content">
          <div class="content-description">
            <h1 class="title">Selamat Datang</h1>
            <p>
              Bersama dengan kami untuk menghentikan kebiasaan <br>
              merokok dan memulai perjalanan menuju kehidupan <br>
              yang lebih sehat, bebas dari bahaya rokok, <br>
              serta penuh dengan energi dan vitalitas.
            </p>
            <a id="next-button" href="#cigarette">Baca Selengkapnya
            </a>
          </div>
          <div class="content-image">
            <picture>
              <source type="image/webp" srcset="./images/home.webp">
              <source type="image/jpeg" srcset="./images/home.jpg">
              <img src="./images/home.png" alt="Logo" />
            </picture>
          </div>
        </article>
    </section>

    <section class="content" id="cigarette">
        <article class="cigarette-content hidden">
          <h1>Apa saja sih Kandungan Rokok itu ?</h1>
          <div class="content-box">
            <div>
              <picture>
                <source type="image/webp" srcset="./images/content-side.webp">
                <source type="image/jpeg" srcset="./images/content-side.jpg">
                <img src="images/content-side.png" alt="">
              </picture>
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

    <section class="content" id="comment"></section>
    
    <button id="scroll-to-top" class="go-to-top">
      <i class="fa fa-arrow-up my-go-to-top"></i>
    </button>`;
  },

  async afterRender() {
    try {
      const contents = await HomeSource.getContent();
      const contentSection = document.querySelector('.card-container');
      contents.forEach((content) => {
        contentSection.innerHTML += crateCigaretteContentCard(content);
      });

      const diseases = await HomeSource.getDisease();
      const diseaseContainer = document.querySelector('.smoking-disease');
      diseases.forEach((disease) => {
        diseaseContainer.innerHTML += createDiseaseContainer(disease);
      });

      const benefits = await HomeSource.getBenefits();
      const benefitsSection = document.querySelector('.benefits-container');
      benefits.forEach((benefit) => {
        benefitsSection.innerHTML += createBenefitsCard(benefit);
      });

      const commentSection = document.querySelector('#comment');
      commentSection.innerHTML += createCommentSection();

      const comments = await CommentSource.getComment();
      const commentsArray = Object.values(comments);
      const commentsContainer = document.querySelector('#comment-list');
      commentsArray.forEach((comment) => {
        commentsContainer.innerHTML += createCommentItem(comment);
      });

      const addComment = document.getElementById('comment-form');
      addComment.addEventListener('submit', async (event) => {
        event.preventDefault();

        const comentatorName = document.getElementById('commentatorName').value;
        const comentatorComment = document.getElementById('commentatorComment').value;
        const date = new Date().toISOString().split('T')[0];

        const { default: Swal } = await import('sweetalert2');

        if (!comentatorName || !comentatorComment) {
          return Swal.fire({
            icon: 'error',
            title: 'Harap Isi Semua Kolom',
          });
        }

        const commentData = {
          name: comentatorName,
          comment: comentatorComment,
          date,
        };

        const { isConfirmed } = await Swal.fire({
          title: 'Konfirmasi',
          text: 'Buat Komentar',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Ya',
          cancelButtonText: 'Batal',
        });

        if (!isConfirmed) {
          return;
        }

        try {
          const data = await AddComment.addComment(commentData);

          if (data && data.name) {
            AddComment.renderComment(commentData);

            document.getElementById('commentatorName').value = '';
            document.getElementById('commentatorComment').value = '';
          } else {
            console.error('Unexpected data format:', data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      });

      PageScroll.init();
      ScrollToTop.init();
    } catch (error) {
      console.error('Error rendering: ', error);
    }
  },
};

export default Home;
