import AddArticleHandler from "../../utils/add-article-handler";
import { createFormArticle } from "../templates/template";

const AddArticle = {
  async render() {
    return `
    <section class="add-article">
        <div class="form-container"></div>
    </section>
`;
  },

  async afterRender() {
    try {
      const formContainer = document.querySelector(".form-container");
      formContainer.innerHTML += createFormArticle();

      const addArticleForm = document.getElementById("article-form");
      addArticleForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const articleAuthor = document.getElementById("author").value;
        const articleTitle = document.getElementById("title").value;
        const articleBody = document.getElementById("body").value;
        const date = new Date().toISOString().split("T")[0];

        const articleData = {
          author: articleAuthor,
          title: articleTitle,
          content: articleBody,
          createdAt: date,
        };

        try {
          const data = await AddArticleHandler.addArticle(articleData);
          document.getElementById("author").value = "";
          document.getElementById("title").value = "";
          document.getElementById("body").value = "";
          if (data && data.name) {
            AddArticleHandler.renderArticle(articleData);
          } else {
            console.error("Unexpected data format:", data);
          }
        } catch (error) {}
      });
    } catch (error) {
      console.error("Error rendering articles:", error);
    }
  },
};

export default AddArticle;
