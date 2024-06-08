import Home from "../views/pages/home";
import Article from "../views/pages/article";
import Detail from "../views/pages/detail-article";
import Survey from "../views/pages/survey";
import About from "../views/pages/about";
import AddArticle from "../views/pages/add-article";

const routes = {
  "/": Home,
  "/home": Home,
  "/article": Article,
  "/detail/:id": Detail,
  "/survey": Survey,
  "/about": About,
  "/add-article": AddArticle,
};

export default routes;
