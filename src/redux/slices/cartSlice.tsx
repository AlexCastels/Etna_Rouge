import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../interfaces";

interface CartState{
    cart : Card[],
    total : number,
    totalQuantity: number,
    toggleCart : boolean,
}
const initialState : CartState = {
    cart: [],
    total: 0,
    totalQuantity: 0,
    toggleCart : false,
}


const total = (cart : Card[]) => {
    //creo un array generale dove verranno contenuti i prezzi
    let generalArray : number[] = []
    //ciclo il carrello, all'interno del ciclo vado a controllare che per ogni
    //quantità del prodotto mi dovrà andare ad aggiungere il singolo prezzo
    //all'array generale
    cart.forEach((elemento) => {
        for (let i = 0; i < elemento.quantity; i++) {
            generalArray.push(elemento.price);
        }
    });
    //estrapolo il valore globali delle quantità che avrò dentro il carrello (per la condizione)  
    const quantity = cart.map((elemento) => elemento.quantity).reduce((a ,b) => a + b , 0)
    //estrapolo il totale che avrò nel carrello (per la condizione)
    let total = Math.round(cart.reduce((total,item) => total + item.price * item.quantity ,0))

  // console.log('quantità totali in cart ' + quantity)
  // console.log('totale globale cart ' + total);
  // console.log('array con prezzi generali ' + generalArray);

    //imposto la condizione per poter accedere alla promo
    if(total > 1000 && quantity >= 3){
        
        return Math.round(generalArray.sort((a , b) => a - b).slice(2).reduce((a , b) => a + b ,0))
    } else {
        return total
    }
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
            state.total = total(state.cart)
            state.totalQuantity = totalQuantity(state.cart)
            state.total = total(state.cart)
        }),
        remove:((state,action) => {
            state.cart = state.cart.filter((el) => el.id !== action.payload.id);
            state.total = total(state.cart)
            state.totalQuantity = totalQuantity(state.cart)       
        }),
        
        decrement: ((state, action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            element && element?.quantity > 1 ? element.quantity -= 1 : state.cart = state.cart.filter((el) => el.id !== action.payload.id)
            state.total = total(state.cart)
            state.totalQuantity = totalQuantity(state.cart)           
        }),
        increment : ((state,action) => {
            const element = state.cart.find((el) => el.id == action.payload.id )
            element && element?.quantity >= 1 ? element.quantity += 1 : state.cart
            state.total = total(state.cart)
            state.totalQuantity = totalQuantity(state.cart)
        }),
        clearCart: ((state) => {
            state.cart = []
            state.total = 0
            state.totalQuantity = 0
        }),
        toggleCart: state => {
            state.toggleCart = !state.toggleCart;
        }
    },
})

export default cartSlice.reducer
export const {addToCart,remove,decrement,increment,clearCart,toggleCart} = cartSlice.actions