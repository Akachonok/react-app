import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../model/poduct"
import './card.css'

interface ProductProps {
  product: IProduct
}

export function Card({ product }: ProductProps) {
  const navigateToUrl = useNavigate();

  function currency(number: number): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(number)
  }

  function navigateToDetailInfo(): void {
    navigateToUrl(`/detail-information/${product.id}`, { state: product, replace: false, })
  }

  return (
    <div className="card-wrap shadow-2xl mt-4" onClick={navigateToDetailInfo}>
      <div className="card-name-and-text">
        <img className="card-wrap__img" src={product.thumbnail} alt={product.thumbnail}></img>
        <div className="w-full text-center mt-2">{ product.title }</div>
      </div>

      <div className="card-price mb-2">
        <span>Price: {currency(product.price)}</span>
        <Rating name="read-only" value={product.rating} precision={0.10}  readOnly />
      </div>

    </div>
  )
}