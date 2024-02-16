import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import products from "./reducers/products.reducer";
import { persistReducer, persistStore } from "redux-persist";
import cart from "./reducers/cart.reducer";

const persistConfigProduct = {
    key: 'product',
    storage,
}

const persistConfigCart = {
    key: 'cart',
    storage,
}

const productReducer = persistReducer(persistConfigProduct, products.reducer);
const cartReducer = persistReducer(persistConfigCart, cart.reducer);

export const store = configureStore({
    reducer: {products: productReducer, cart: cartReducer},
    devTools: process.env.NODE_ENV !== 'production',
})


export const persistor = persistStore(store)