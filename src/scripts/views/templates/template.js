const createArticleCard = (article, id) => {
  const truncatedContent =
    article.content.length > 100
      ? article.content.substring(0, 100) + " ..."
      : article.content;
  return `
    <h2>${article.title}</h2>
    <p>${truncatedContent}</p>
    <a href="/#/detail/${id}">Baca Selengkapnya  
      <i class="fa fa-long-arrow-right"></i>
    </a>`;
};

const createArticleCardAside = (article, id) => {
  const truncatedTitle =
    article.title.length > 50
      ? article.title.substring(0, 50) + " ..."
      : article.title;
  return `
    <h2>${truncatedTitle}</h2>
    <a href="/#/detail/${id}">Baca Selengkapnya  
      <i class="fa fa-long-arrow-right"></i>
    </a>`;
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
          <button type="submit" id="publish">Publish</button>
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

const createFormArticle = () => {
  return `
  <form action="" id="article-form">
      <h2>Buat Artikel</h2>
      <div class="form-component">
        <i class="fa fa-user" aria-hidden="true"></i>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Silahkan Masukkan Nama Author ..."
        />
      </div>
      <div class="form-component">
        <i class="fa fa-font" aria-hidden="true"></i>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Silahkan Masukkan Judul Artikel ..."
        />
      </div>
      <textarea
          name="body"
          id="body"
          placeholder="Silahkan Masukkan Isi Konten Artikel ..."
        ></textarea>
      <div class="form-button">
        <button type="button" id="clear">Bersihkan Form</button>
        <button type="submit">Tambah Artikel</button>
      </div>
  </form>
  `;
};

const createDetailArticleSection = (article) => `
  <div class="article-detail">
    <h2 class="article-title">${article.title || "Title not available"}</h2>
    <div class="article-author">by ${
      article.author || "Author not available"
    }</div>
    <div class="article-date">${article.createdAt || "Date not available"}</div>
    <div class="article-body">
      <p>${article.content || "Content not available"}</p>
    </div>
  </div>
`;

export {
  createArticleCard,
  createCommentItem,
  createCommentSection,
  crateCigaretteContentCard,
  createDiseaseContainer,
  createBenefitsCard,
  createFormArticle,
  createDetailArticleSection,
  createArticleCardAside,
};
