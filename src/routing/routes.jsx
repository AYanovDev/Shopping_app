import { Children } from "react";
import App from "../main/App";
import ErrorPage from "./ErrorPage";
import Home from "../home/home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Home /> }],
  },
];

export default routes;
