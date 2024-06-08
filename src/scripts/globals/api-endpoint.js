import CONFIG from "./config";

const API_ENDPOINT = {
  ARTICLE: `${CONFIG.BASE_URL}articles.json`,
  COMMENTS: `${CONFIG.BASE_URL}comments.json`,
  DETAIL_ARTICLE: (id) =>
    `https://smokeless-web-default-rtdb.firebaseio.com/articles/${id}.json`,
};

export default API_ENDPOINT;
