import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../interfaces";

interface CartState{
    cart : Card[],
    total : number,
    totalQuantity: number,
    totalPriceElement: number
}
const initialState : CartState = {
    cart: [],
    total: 0,
    totalQuantity: 0,
    totalPriceElement: 0
}

const totalPrice = (cart : Card[]) => {
   return Math.round(cart.reduce((total,item) =>  total +(item.quantity * item.price),0)) 
}

const totalQuantity = (cart : Card[]) => {
    return cart.reduce((totalQuantity,item) => (totalQuantity + item.quantity),0)
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:((state,action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            const temp = {...action.payload, quantity : 1}
            element ? element.quantity += 1 : state.cart.push(temp)
           state.total = totalPrice(state.cart)
           state.totalQuantity = totalQuantity(state.cart)
          
        }),
        remove:((state,action) => {
            state.cart = state.cart.filter((el) => el.id !== action.payload.id);
            state.total = totalPrice(state.cart)
            state.totalQuantity = totalQuantity(state.cart)
        
        }),
        
        decrement: ((state, action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            element && element?.quantity > 1 ? element.quantity -= 1 : state.cart = state.cart.filter((el) => el.id !== action.payload.id)
            state.total = totalPrice(state.cart)
            state.totalQuantity = totalQuantity(state.cart)
           
        }),
        increment : ((state,action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            element && element?.quantity >= 1 ? element.quantity += 1 : state.cart
            state.total = totalPrice(state.cart)
            state.totalQuantity = totalQuantity(state.cart)
        }),
        
        
    },
})

export default cartSlice.reducer
export const {addToCart,remove,decrement,increment} = cartSlice.actions