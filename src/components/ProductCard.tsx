import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchData } from '../redux/slices/productSlice';
import Plp from './Plp';

const ProductCard = () => {
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(fetchData());
      }, []);

  return (
    <>
     <Plp product = {product} dispatch = {dispatch}/>
    </>
  )
}

export default ProductCard