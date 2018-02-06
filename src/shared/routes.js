import Home from "./home/Home";
import News from "./news/News";
import Animations from './animations/Animations'

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/animations",
    component: Animations
  }
];

export default routes;
