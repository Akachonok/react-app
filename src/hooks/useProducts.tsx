import { useEffect, useState } from "react";

import axios, { AxiosError } from "axios";

import { IProduct } from "../model/poduct";

export function useProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([])

  async function fetchProduct() {
    setLoading(true);

    await axios.get('https://dummyjson.com/products')
      .then((value)=> setProducts(value.data.products))
      .catch((error: AxiosError) => setError(error.message))
      .finally(() => setLoading(false))
  } 

  useEffect(() => {
    fetchProduct();
  }, [])

  return { products, error, loading }
}
