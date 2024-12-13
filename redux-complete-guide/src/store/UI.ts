import { createSlice } from "@reduxjs/toolkit";

export interface UIProps{
    isCartVisible: boolean;
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: {isCartVisible: false},
    reducers: {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;