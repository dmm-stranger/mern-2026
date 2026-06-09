import {
  createBrowserRouter,
} from "react-router";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

import { ROUTES } from "../shared/routes";

export const router =
  createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <MainLayout />,

      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: ROUTES.CATALOG,
          element: <CatalogPage />,
        },

        {
          path: ROUTES.PRODUCT_DETAIL,
          element: <ProductPage />,
        },

        {
          path: ROUTES.CART,
          element: <CartPage />,
        },
      ],
    },

    {
      path: ROUTES.NOT_FOUND,
      element: <NotFoundPage />,
    },
  ]);