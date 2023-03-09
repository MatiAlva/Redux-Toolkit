import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSlice'
import CategoryReducer from "./CategorySlice";
import productReducer from './productSlice'
import cartReducer from './CartSlice'
import searchReducer from './searchSlice'

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: CategoryReducer,
        product: productReducer,
        cart: cartReducer,
        search: searchReducer
    }
})

export default store