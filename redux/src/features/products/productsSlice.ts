import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  search: "",
  category: "",
  page: 1,
}

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },

    setCategory: (state, action) => {
      state.category = action.payload
    },

    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const {
  setSearch,
  setCategory,
  setPage,
} = productsSlice.actions

export default productsSlice.reducer