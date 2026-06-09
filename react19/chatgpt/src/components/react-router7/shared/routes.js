export const ROUTES = {
  HOME: "/",

  CATALOG: "/catalog",
  CATALOG_CAT: "/catalog/:categorySlug",

  PRODUCT_DETAIL: "/products/:productId",

  CART: "/cart",

  CHECKOUT: "/checkout",

  ACCOUNT: "/account",

  LOGIN: "/auth/login",
  REGISTER: "/auth/register",

  NOT_FOUND: "*",
};

export const buildRoute = {
  catalogCategory: (slug) =>
    `/catalog/${slug}`,

  productDetail: (productId) =>
    `/products/${productId}`,
};