import Movie from "pages/movie";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  { path: "/", element: <></> },
  { path: "/movie/:id", element: <Movie /> },
];

const router = createBrowserRouter(routes);

export default router;
