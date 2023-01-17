import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom"
import { useProducById } from "../../hooks/usePriceById";

export default function DetailInformationPage() {
  const { id } = useParams();
  const { product, loading, error } = useProducById(id)

  return (
    <>
      { loading && !error && <LinearProgress /> }
      <div>{product?.title}</div>
      <div>{product?.description}</div>
    </>
  )
}