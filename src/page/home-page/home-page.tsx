import { Card } from "./card/card";
import { useProduct } from "../../hooks/useProducts";
import { useState } from "react";
import { IProduct } from "../../model/poduct";
import { LinearProgress } from "@mui/material";

import './home-page.css'

export default function HomePage() {
  const { products, error, loading } = useProduct();
  const [ activeProducts, setActiveProducts ] = useState<IProduct[]>([])

  const categoryes = Array.from(new Set(products.map((ct) => ct.category)))

  function productClickHendlik(filter: string): void {
    setActiveProducts(products.filter((item) => item.category === filter))
  }
  
  return (
    <>
      { loading && !error && <LinearProgress /> }

      <div className="categoryes-container mt-4 ">
        <div className="categoryes-container__wrap">
          { categoryes.map((ct, index) => <div onClick={() => productClickHendlik(ct)} className="categoryes-container__item shadow" key={index}>{ct}</div>) }
        </div>
      </div>
      <div className="products-container mt-4">
        <div className="categoryes-container__wrap">
          { activeProducts.map(((product) => <Card product={product} key={product.id} />)) }
        </div>
      </div>
    </>
  )
}
