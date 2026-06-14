import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  theme: "dark",
  sidebarOpen: false,
}

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.theme =
        state.theme === "dark"
          ? "light"
          : "dark"
    },

    toggleSidebar: (state) => {
      state.sidebarOpen =
        !state.sidebarOpen
    },
  },
})

export const {
  toggleTheme,
  toggleSidebar,
} = uiSlice.actions

export default uiSlice.reducer