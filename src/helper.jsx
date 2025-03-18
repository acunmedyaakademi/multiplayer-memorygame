import Game from "./components/Game";
import Home from "./components/Home";
import Login from "./components/Login";

const routers = [
  {
    url: "/home",
    component: <Home />,
  },
  {
    url: "/game",
    component: <Game />,
  },
  {
    url: "/login",
    component: <Login />,
  },
];

export const getPage = (url) => {
  const page = routers.find((router) => router.url === "/" + url.split("/")[1]);
  return page ? page.component : <h4>404</h4>;
};
