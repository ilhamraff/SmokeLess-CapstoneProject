import CONFIG from "./config";

const API_ENDPOINT = {
  ARTICLE: `${CONFIG.BASE_URL}articles.json`,
  COMMENTS: `${CONFIG.BASE_URL}comments.json`,
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}articles/${id}.json`,
};

export default API_ENDPOINT;
