import API_ENDPOINT from '../globals/api-endpoint';

/**
 * AddComment adalah objek yang bertanggung jawab untuk menangani
 * penambahan komentar dan rendering komentar pada halaman.
 */
const AddComment = {
  /**
   * Menambahkan komentar baru dengan mengirimkan data komentar ke server.
   * @param {Object} commentData - Data komentar yang akan ditambahkan.
   * @returns {Promise<Object>} Objek yang berisi data komentar yang telah ditambahkan.
   */
  async addComment(commentData) {
    try {
      const response = await fetch(API_ENDPOINT.COMMENTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error: ', error);
    }
  },

  /**
   * Merender komentar pada halaman.
   * @param {Object} comment - Objek komentar yang akan dirender.
   */
  renderComment(comment) {
    const commentList = document.querySelector('#comment-list');
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `
      <h4>${comment.name}</h4>
      <p>${comment.comment}</p>
      <p>${comment.date}</p>`;
    commentList.appendChild(commentItem);
  },
};

export default AddComment;
