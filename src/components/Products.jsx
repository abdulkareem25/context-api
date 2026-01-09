import { useContext } from "react"
import { productContext } from "../context/ProductProvider"
import { useNavigate } from "react-router-dom";

const Products = () => {

  const navigate = useNavigate()
  const productsData = useContext(productContext);
  console.log(productsData);

  return (
    <div className="products">
      <div className="all">
        {productsData.map((product) => (
        <div key={product.id} className="product"
          onClick={() => {
            navigate(`/products/${product.id}`)
          }}
        >
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <p>Price: ${product.price}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products
