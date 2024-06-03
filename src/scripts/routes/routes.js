import Home from "../views/pages/home";
import Article from "../views/pages/article";
import Detail from "../views/pages/detail-article";

const routes = {
  "/": Home,
  "/home": Home,
  "/article": Article,
  "/detail/:id": Detail,
};

export default routes;
