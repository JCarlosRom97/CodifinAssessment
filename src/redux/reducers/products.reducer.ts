import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductsJSON from "../../data/products.json";
import { IProduct } from "../../Types";

const products = createSlice({
    name:"products",
    initialState:{
        data: ProductsJSON
    },
    reducers: {
        add: (state, action: PayloadAction<IProduct>) =>{
            state.data = [...state.data, action.payload]; 
        }
    }
})


export const {add} = products.actions; 

export default products; 