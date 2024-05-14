import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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
  const totalPrice = useSelector((state: RootState)=> state.cart.total);

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
          const order = await actions.order.capture();
          console.log(order);
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
