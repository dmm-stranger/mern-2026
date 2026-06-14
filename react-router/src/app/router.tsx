import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import AdminLayout from "../layouts/AdminLayout";

import AuthGuard from "../guards/AuthGuard";
import RoleGuard from "../guards/RoleGuard";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Account from "../pages/Account";

import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Orders from "../pages/admin/Orders";
import AdminProducts from "../pages/admin/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "login", element: <Login /> },
    ],
  },

  {
    element: <AuthGuard />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { path: "/account", element: <Account /> },
          { path: "/checkout", element: <Checkout /> },
        ],
      },
    ],
  },

  {
    element: <AuthGuard />,
    children: [
      {
        element: <RoleGuard allowedRoles={[ "admin" ]} />,
        children: [
          {
            path: "/admin",
            element: <AdminLayout />,
            children: [
              { index: true, element: <Dashboard /> },
              { path: "users", element: <Users /> },
              { path: "orders", element: <Orders /> },
              { path: "products", element: <AdminProducts /> },
            ],
          },
        ],
      },
    ],
  },
]);