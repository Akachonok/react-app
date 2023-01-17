import { useState, useEffect } from "react";

import axios, { AxiosError } from "axios";

import { IProduct } from "../model/poduct";

export function useProducById(productId: string | undefined) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [product, setProduct] = useState<IProduct>()

  async function fetchProduct() {
    setLoading(true);

    await axios.get(`https://dummyjson.com/products/${productId}`)
      .then((value)=> setProduct(value.data))
      .catch((error: AxiosError) => setError(error.message))
      .finally(() => setLoading(false))
  } 

  useEffect(() => {
    fetchProduct();
  }, [])

  return { product, error, loading }
}