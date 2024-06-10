import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";
import AddArticleHandler from "./add-article-handler";

const formHandler = {
  async initializeCKEditor(selector) {
    try {
      const editor = await ClassicEditor.create(
        document.querySelector(selector),
        {
          toolbar: [
            "undo",
            "redo",
            "heading",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
          ],
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
            ],
          },
        }
      );
      return editor;
    } catch (error) {
      console.error("There was a problem initializing the editor.", error);
    }
  },

  initializeFormHandling(bodyEditor) {
    try {
      const addArticleForm = document.getElementById("article-form");
      addArticleForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const articleAuthor = document.getElementById("author").value;
        const articleTitle = document.getElementById("title").value;
        const articleBody = bodyEditor.getData();
        const date = new Date().toISOString().split("T")[0];

        if (!articleAuthor || !articleTitle || !articleBody) {
          return Swal.fire({
            icon: "error",
            title: "Harap Isi Semua Kolom",
          });
        }

        const articleData = {
          author: articleAuthor,
          title: articleTitle,
          content: articleBody,
          createdAt: date,
        };

        const { isConfirmed } = await Swal.fire({
          title: "Konfirmasi?",
          text: "Kamu yakin mau Menambah Artikel ini?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Ya",
          cancelButtonText: "Batal",
        });

        if (!isConfirmed) {
          return;
        }

        try {
          const data = await AddArticleHandler.addArticle(articleData);

          if (data && data.name) {
            AddArticleHandler.renderArticle(articleData);
          } else {
            console.error("Unexpected data format:", data);
          }
        } catch (error) {
          console.error("Error:", error);
        }

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Berhasil Menambah Artikel",
        });

        addArticleForm.reset();
        bodyEditor.setData("");
      });
    } catch (error) {
      console.error("Error Adding Data", error);
    }
  },

  initializeClearFormHandling(bodyEditor) {
    const clearForm = document.getElementById("clear");

    clearForm.addEventListener("click", () => {
      document.getElementById("author").value = "";
      document.getElementById("title").value = "";
      bodyEditor.setData("");
    });
  },
};

export default formHandler;
