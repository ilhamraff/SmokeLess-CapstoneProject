import CONFIG from "./config";

const API_ENDPOINT = {
  ARTICLE: `${CONFIG.BASE_URL}article.json`,
  COMMENTS: `${CONFIG.BASE_URL}comment.json`,
  DETAIL: (id) => `${CONFIG.BASE_URL}article/${id}.json`,
};

export default API_ENDPOINT;
