const createArticleCard = (article) => {
  const truncatedContent =
    article.content.length > 100
      ? article.content.substring(0, 100) + "..."
      : article.content;
  return `
  <div class="article-item">
    <h2>${article.title}</h2>
    <p>${truncatedContent}</p>
    <a href="#">Baca Selengkapnya
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </a>
  </div>`;
};

const createCommentItem = (comment) => {
  return `
  <div class="comment-item">
    <h4>${comment.name}</h4>
    <p>${comment.comment}</p>
    <p>${comment.date}</p>
  </div>`;
};

const createCommentSection = () => {
  return `
  <article class="comments-container hidden">
    <h1>Post A Comment</h1>
    <div class="commentbox">
      <img src="/images/user.png" alt="" />
      <div class="form-content">
        <h2>Comment As:</h2>
        <form action="" class="comment-form" id="comment-form">
          <input
            type="text"
            placeholder="Enter Your Name ..."
            class="user"
            id="commentatorName"
            /><br />
          <textarea
            type="text"
            placeholder="Enter Your Comment ..."
            class="usercomment"
            id="commentatorComment"
            ></textarea>
          <button type="submit" disabled id="publish">Publish</button>
        </form>
      </div>
    </div>
    <div class="comment-list">
      <img src="/images/user.png" alt="" />
      <div class="comments-detail" id="comment-list"></div>
    </div>
  </article>`;
};

const crateCigaretteContentCard = (content) => {
  return `
    <div class="card">
      <img src="${content.img}" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h3>${content.name}</h3>
      </div>
    </div>                
  `;
};

const createDiseaseContainer = (disease) => {
  return `
  <div class="disease-container">
    <div class="disease-title">
      <h3>${disease.title}</h3>
    </div>
    <div class="disease-body">
      <p>${disease.body}</p>
    </div>
  </div>`;
};

const createBenefitsCard = (benefit) => {
  return `
  <div class="card-benefit">
    <div class="user-picture">
      <img src="${benefit.img}" alt="" />
    </div>
    <h3 class="benefits-title">${benefit.title}</h3>
  </div>`;
};

export {
  createArticleCard,
  createCommentItem,
  createCommentSection,
  crateCigaretteContentCard,
  createDiseaseContainer,
  createBenefitsCard,
};
