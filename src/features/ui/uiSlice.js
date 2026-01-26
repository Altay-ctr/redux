import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        username: "Altay",
        age: 21,
        city: "Токмок",
        theme: "light"
    },

    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark": "light"
        }
    }
})


export const {  toggleTheme } = uiSlice.actions
export default uiSlice.reducer