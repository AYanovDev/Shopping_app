import { Children } from "react";
import App from "../main/App";
import ErrorPage from "./ErrorPage";
import Home from "../home/home";
import Goods from "../goods/goods";
import ShoppingCart from "../shopping_cart/shoppingCart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/goods/:goodsId", element: <Goods /> },
      { path: "/shoppingCart", element: <ShoppingCart /> },
    ],
  },
];

export default routes;
