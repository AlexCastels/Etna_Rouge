import { currencyFormatter } from "../utils/currencyFormatter";
import { Products } from "../interfaces";
import useFetch from "./Hooks/useFetch";

const ProductsFetched = () => {
  const [data] = useFetch("http://localhost:3000/products")
  // Chiamata alla funzione per recuperare i dati dei prodotti

  return (
    <>
      {data &&
        data.map((item:Products, index: number) => {
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

export default ProductsFetched;
