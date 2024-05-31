import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { PaypalRedirect } from "./PaypalRedirect"
import { clearCart } from "../../redux/slices/cartSlice";

interface PayPalOrderData {
  intent: "CAPTURE";
  purchase_units: PayPalPurchaseUnit[];
}

interface PayPalPurchaseUnit {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
}
export default function Paypal() {
  const paypal = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()
  const totalPrice = useAppSelector((state : RootState) => state.cart.totalPrice);
  const totalPricePromo = useAppSelector((state : RootState) => state.cart.totalPricePromo)
  const activePromo = useAppSelector((state : RootState) => state.cart.activePromo);
  let total: number
  if(activePromo){
    total=totalPricePromo
  } else {
    total=totalPrice
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          layout: "horizontal",
          color: "gold",
          shape: "pill",
          label: "paypal",
        },
        createOrder: (data, actions, err) => {
          const orderData: PayPalOrderData = {
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "EUR",
                  value: total,
                },
              },
            ],
          };
          return actions.order.create(orderData);
        },
        onApprove: async (data, actions) => {
          dispatch(clearCart())
          navigate('/thankYouCard')
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current!);
  }, [total]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
