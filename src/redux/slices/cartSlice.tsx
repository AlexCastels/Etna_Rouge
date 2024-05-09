import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../interfaces";

interface CartState{
    cart : Card[],
    total : number
}
const initialState : CartState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:((state,action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            const temp = {...action.payload, quantity : 1}
            element ? element.quantity += 1 : state.cart.push(temp)
            state.total =  state.cart.reduce((total,item) =>  total + (item.quantity * item.price),0)
        }),
        remove:((state,action) => {
            state.cart = state.cart.filter((el) => el.id !== action.payload.id);
        }),
        
        decrement: ((state, action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            element && element?.quantity > 1 ? element.quantity -= 1 : state.cart = state.cart.filter((el) => el.id !== action.payload.id)
            state.total =  state.cart.reduce((total,item) =>  total + (item.quantity * item.price),0)
        }),
        increment : ((state,action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            element && element?.quantity > 1 ? element.quantity += 1 : state.cart
            state.total =  state.cart.reduce((total,item) =>  total + (item.quantity * item.price),0)
        }),
        
        
    },
})

export default cartSlice.reducer
export const {addToCart,remove,decrement,increment} = cartSlice.actions