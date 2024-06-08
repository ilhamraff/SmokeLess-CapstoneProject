import CONFIG from "./config";

const API_ENDPOINT = {
  ARTICLE: `${CONFIG.BASE_URL}article.json`,
  COMMENTS: `${CONFIG.BASE_URL}comment.json`,
  DETAIL_ARTICLE: (id) =>
    `https://smokeless-web-default-rtdb.firebaseio.com/article/${id}.json`,
};

export default API_ENDPOINT;
