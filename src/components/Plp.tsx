import { useEffect } from "react";
import { useState } from "react";
import * as contentful from 'contentful'
import { ProductCard } from "./ProductCard";
import { Card } from "../interfaces";


export function Plp(){
    
    const [data , setData] = useState([])
    
    const client = contentful.createClient({
        space: 'ojcck4r9mycx',
        environment: 'master',
        accessToken: 'VnVr3_Dibj4Sn6MzQUrilEEBduvNIaupszhRS-KOti0'
    })

    async function getData(){
        try {
            const res:any = await client.getEntry('3aW84Vh8B9S14FM8tqwq2c') 
            setData(res.fields.productsJson)
        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(()=>{
        getData()
    },[])

    if(data){
        console.log(data);
    }
    
    return(
        <>
            {data && data.map((item:Card) => {
                return <ProductCard key={item.id} product={item}/>
            })}
        </>
    )
}