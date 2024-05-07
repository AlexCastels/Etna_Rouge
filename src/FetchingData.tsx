import { useEffect, useState } from "react";
import { currencyFormatter } from "./utils/currencyFormatter";

interface Products {
  id: number;
  name: string;
  price: number;
  gender: string;
  category: string;
  img: string;
  quantity: number;
  description: string;
}

const FetchingData = () => {
  const [products, setProducts] = useState<Products>();

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error("Errore durante il recupero dei dati");
      }
      const products = await response.json();

      setProducts(products);
      console.log("Dati ricevuti:", products);

    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Chiamata alla funzione per recuperare i dati dei prodotti

  return (
    <>
      {products &&
        products.map((item: Products, index: number) => {
          return (
            <div>
              <h1 key={index}>{item.name}</h1>
              <h3>{currencyFormatter.format(item.price)} </h3>
            </div>
          );
        })}
      * suca
    </>
  );
};

export default FetchingData;
