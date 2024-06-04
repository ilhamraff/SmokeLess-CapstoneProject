import Home from "../views/pages/home";
import Article from "../views/pages/article";
import Detail from "../views/pages/detail-article";
import About from "../views/pages/about";
import Survey from "../views/pages/survey";

const routes = {
  "/": Home,
  "/home": Home,
  "/article": Article,
  "/detail/:id": Detail,
  "/survey": Survey,
  "/about": About,
};

export default routes;
