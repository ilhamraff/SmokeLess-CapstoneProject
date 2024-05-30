import ArticleSource from "../../data/article-source";
import CommentSource from "../../data/comment-source";
import { createCommentItem } from "../templates/template";

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
    <section class="content" id="comment">
        <article class="comments-container hidden">
          <h1>Post A Comment</h1>
          <div class="commentbox">
            <img src="/image/user.png" alt="" />
            <div class="form-content">
              <h2>Comment As:</h2>
              <form action="" class="comment-form">
                <input
                  type="text"
                  placeholder="Enter Your Name ..."
                  class="user"
                /><br />
                <textarea
                  type="text"
                  placeholder="Enter Your Comment ..."
                  class="usercomment"
                ></textarea>
                <button type="submit" disabled id="publish">Publish</button>
              </form>
            </div>
          </div>
          <div class="comment-list">
            <img src="/image/user.png" alt="" />
            <div class="comments-detail" id="comment-list"></div>
          </div>
        </article>
      </section>`;
  },

  async afterRender() {
    try {
      const comments = await CommentSource.getComment();
      const commentsArray = Object.values(comments);
      const commentsContainer = document.querySelector("#comment-list");

      commentsArray.forEach((comment) => {
        commentsContainer.innerHTML += createCommentItem(comment);
      });
    } catch (error) {
      console.error("Error rendering comment:", error);
    }
  },
};

export default Home;
