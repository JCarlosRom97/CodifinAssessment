import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductCart } from "../../Types";


type SliceState ={
    data:IProductCart[]
}

type SKU = {
    sku: string
};

const initialState: SliceState = { data: [] }
const cart = createSlice({
    name:"cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) =>{
            if(state.data.length === 0){
                state.data = [{...action.payload, quantity: 1}]; 
                return; 
            }
            const isInCart = state.data.some((product:IProduct)=> product.sku === action.payload.sku); 

            if(isInCart){
                state.data.map((product)=>{
                    if(product.sku === action.payload.sku){
                        return {...product, quantity: (product.quantity ? product.quantity ++: 0)} 
                    }
                    return product; 
                })
            }else{
                state.data = [...state.data, {...action.payload, quantity: 1}]; 
            }
        },
        removeOne: (state, action: PayloadAction<SKU>) => {
            state.data.map((product)=>{
                if(product.sku === action.payload.sku){
                    if((product.quantity ? product.quantity: 0)>1){
                        return {...product, quantity: (product.quantity ? product.quantity-- : 0)} 
                    }
                    return {...product, quantity: 0} 
                }
            })


        },
        removeAll: (state, action: PayloadAction<SKU>) => { 
            const tempFilter = state.data.filter((product) => product.sku !== action.payload.sku)
            state.data = [...tempFilter]; 
        }
    }
})


export const {add, removeOne, removeAll} = cart.actions; 

export default cart; 