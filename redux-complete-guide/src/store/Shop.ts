import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart"
import UIReducer from './UI'

const store = configureStore({
    reducer: {
        cart: CartReducer,
        ui: UIReducer,
    }
})

export default store;