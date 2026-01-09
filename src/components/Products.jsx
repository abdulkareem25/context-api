import { useContext } from "react"
import { productContext } from "../context/ProductProvider"

const Products = () => {

  const productsData = useContext(productContext);
  console.log(productsData)

  return (
    <div>
      
    </div>
  )
}

export default Products
