import CONFIG from "./config";

const API_ENDPOINT = {
  GET_ARTICLE: `${CONFIG.BASE_URL}article.json`,
  GET_COMMENTS: `${CONFIG.BASE_URL}comment.json`,
};

export default API_ENDPOINT;
