import { baseApi } from "../../app/api/baseApi"

export const productsApi =
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => "/products",

        providesTags: [ "Product" ],
      }),

      getProduct: builder.query({
        query: (id) =>
          `/products/${id}`,
      }),
    }),
  })

export const {
  useGetProductsQuery,
  useGetProductQuery,
} = productsApi