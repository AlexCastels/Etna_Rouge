import { useRef, useEffect } from "react";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { PaypalRedirect } from "./PaypalRedirect"

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
  const totalPrice = useAppSelector((state: RootState)=> state.cart.total);

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
                  value: totalPrice,
                },
              },
            ],
          };
          return actions.order.create(orderData);
        },
        onApprove: async (data, actions) => {
          // const order = await actions.order.capture();
          <PaypalRedirect/>
          setTimeout(()=>{
            navigate('/')
          },2500)
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current!);
  }, [totalPrice]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
