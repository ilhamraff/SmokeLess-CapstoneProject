import API_ENDPOINT from "../globals/api-endpoint";

/**
 * AddArticleHandler adalah objek yang bertanggung jawab untuk menangani penambahan artikel dan rendering artikel pada halaman.
 */
const AddArticleHandler = {
  /**
   * Menambahkan artikel baru dengan mengirimkan data artikel ke server.
   * @param {Object} articleData - Data artikel yang akan ditambahkan.
   * @returns {Promise<Object>} Objek yang berisi data artikel yang telah ditambahkan.
   */
  async addArticle(articleData) {
    try {
      const response = await fetch(API_ENDPOINT.ARTICLE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error Adding Article: ", error);
    }
  },

  /**
   * Merender artikel pada halaman dengan memotong konten artikel jika lebih dari 100 karakter.
   * @param {Object} article - Objek artikel yang akan dirender.
   */
  renderArticle(article) {
    const truncatedContent =
      article.content.length > 100
        ? `${article.content.substring(0, 100)} ...`
        : article.content;
    const articleList = document.querySelector(".articles-container");
    const articleItem = document.createElement("div");
    articleItem.classList.add("article-item");
    articleItem.innerHTML = `
      <h2>${article.title}</h2>
      <p>${truncatedContent}</p>
      <a href="/#/detail/${article.id}">Baca Selengkapnya  
        <i class="fa fa-long-arrow-right"></i>
      </a>`;
    articleList.appendChild(articleItem);
  },
};

export default AddArticleHandler;
