import { useEffect, useState } from "react";
import { Products } from "../../interfaces";

const useFetch = (url: string):[Products[]] => {
    const [data, setData] = useState<Products[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Errore durante il recupero dei dati");
                }
                const data = await response.json();

                setData(data);
                console.log("Dati ricevuti da useFetch:", data);

            } catch (error) {
                console.error("Si è verificato un errore:", error);
            }
        }
        fetchData()
    }, [url]);

    return [data]
}

export default useFetch;