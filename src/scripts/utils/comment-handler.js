import API_ENDPOINT from "../globals/api-endpoint";

const AddComment = {
  async addComment(commentData) {
    try {
      const response = await fetch(API_ENDPOINT.COMMENTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error: ", error);
    }
  },

  renderComment(comments) {
    const commentList = document.querySelector("#comment-list");
    // commentList.innerHTML = "";
    comments.forEach((comment) => {
      const commentItem = document.createElement("div");
      commentItem.classList.add("comment-item");
      commentItem.innerHTML = `
        <h4>${comment.name}</h4>
        <p>${comment.comment}</p>
        <p>${comment.date}</p>`;
      commentList.appendChild(commentItem);
    });
  },
};

export default AddComment;
