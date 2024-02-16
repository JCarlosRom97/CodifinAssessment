import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import products from "./reducers/products.reducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, products.reducer)

export const store = configureStore({
    reducer: {products: persistedReducer},
    devTools: process.env.NODE_ENV !== 'production',
})


export const persistor = persistStore(store)