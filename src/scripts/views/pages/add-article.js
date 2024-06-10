import { createFormArticle } from "../templates/template";
import formHandler from "../../utils/form-handler";

const AddArticle = {
  async render() {
    return `
    <section class="add-article">
        <div class="form-container"></div>
    </section>`;
  },

  async afterRender() {
    try {
      const formContainer = document.querySelector(".form-container");
      formContainer.innerHTML += createFormArticle();

      const bodyEditor = await formHandler.initializeCKEditor("#body");

      formHandler.initializeFormHandling(bodyEditor);

      formHandler.initializeClearFormHandling(bodyEditor);
    } catch (error) {
      console.error("Error rendering articles:", error);
    }
  },
};

export default AddArticle;
