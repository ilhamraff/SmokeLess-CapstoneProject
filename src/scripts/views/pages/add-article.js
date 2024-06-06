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
    } catch (error) {
      console.error("Error rendering articles:", error);
    }
  },
};

export default AddArticle;
