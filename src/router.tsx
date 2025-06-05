import Dashboard from "pages/dashboard";
import Movie from "pages/movie";
import { createHashRouter } from "react-router-dom";

const routes = [
  { path: "/", Component: Dashboard },
  { path: "/movie/:id", Component: Movie },
];

const router = createHashRouter(routes);

export default router;
