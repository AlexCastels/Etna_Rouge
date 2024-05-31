import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../interfaces";

interface CartState {
    cart: Card[];
    totalPrice: number;
    totalPricePromo: number;
    totalQuantity: number;
    toggleCart: boolean;
    activePromo: boolean;
    singlePrice: number;
}

const initialState: CartState = {
    cart: [],
    totalPrice: 0,
    totalPricePromo: 0,
    totalQuantity: 0,
    toggleCart: false,
    activePromo: false,
    singlePrice: 0
};

const totals = (cart: Card[], activePromo: boolean): any => {
    let generalArray: number[] = [];
    //ciclo il carrello per poter pushare il singolo prezzo in base alla quantità del singolo prodotto
    cart.forEach((elemento) => {
        for (let i = 0; i < elemento.quantity; i++) {
            generalArray.push(elemento.price);
        }
    });
    //estrapolo il valore globali delle quantità che avrò dentro il carrello (per la condizione)
    const totalQuantity = cart.map((elemento) => elemento.quantity).reduce((a, b) => a + b, 0);
    //estrapolo il totale che avrò nel carrello (per la condizione)
    let totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
   

    //imposto la condizione per poter accedere alla promo
    let totalPricePromo;
    if (totalPrice > 1000 && totalQuantity >= 3) {
        activePromo = true;
        totalPricePromo = generalArray.sort((a, b) => a - b).slice(2).reduce((a, b) => a + b, 0);
        return { activePromo, totalPricePromo, totalPrice, totalQuantity};
    } else {
        activePromo = false;
        return { totalPrice, activePromo, totalQuantity };
    }
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const element = state.cart.filter((el) => el.id == action.payload.id).find((el) => el.size == action.payload.size);
            const temp = { ...action.payload, quantity: 1};
            element  ? (element.quantity += 1): state.cart.push(temp);
            const { totalPrice, activePromo, totalPricePromo, totalQuantity} = totals( state.cart,state.activePromo);
            state.totalQuantity = totalQuantity
            state.totalPrice = totalPrice;
            state.totalPricePromo = totalPricePromo;
            state.activePromo = activePromo;
        },
        remove: (state, action) => {
            state.cart = state.cart.filter((el) =>el.id !== action.payload.id || el.size !== action.payload.size);
            const { totalPrice, activePromo, totalPricePromo, totalQuantity } = totals( state.cart,state.activePromo);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
            state.totalPricePromo = totalPricePromo;
            state.activePromo = activePromo;
        },

        decrement: (state, action) => {
            const element = state.cart.filter((el) => el.id == action.payload.id).find((el) => el.size == action.payload.size);
            element && element?.quantity > 1 ? (element.quantity -= 1) : (state.cart = state.cart.filter((el) => el.id !== action.payload.id || el.size !== action.payload.size));
            const { totalPrice, activePromo, totalPricePromo, totalQuantity } = totals(state.cart,state.activePromo);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
            state.totalPricePromo = totalPricePromo;
            state.activePromo = activePromo;
        },
        increment: (state, action) => {
            const element = state.cart.filter((el) => el.id == action.payload.id).find((el) => el.size == action.payload.size);
            element  ? (element.quantity += 1): element;
            const { totalPricePromo, totalPrice, activePromo, totalQuantity } = totals(state.cart,state.activePromo);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
            state.totalPricePromo = totalPricePromo;
            state.activePromo = activePromo;
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
        toggleCart: (state) => {
            state.toggleCart = !state.toggleCart;
        },
    },
});

export default cartSlice.reducer;
export const {addToCart,remove,decrement,increment,clearCart,toggleCart,} = cartSlice.actions;
