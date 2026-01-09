import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductbyId } from "../api/products.api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({})

  const fetchProductDetails = async () => {
    setProduct(await getProductbyId(id));
  }
  useEffect(() => {
    fetchProductDetails();
  }, [])

  return (
    <div className="product-details">
      <div className="product-details-header">
        <h2 className="title">{product.title}</h2>
        <span className="category">{product.category}</span>
      </div>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="description">{product.description}</p>
      <div className="product-details-footer">
        <p className="price">Price: ${product.price}</p>
        <div className="rating">
          <span className="rating-value">⭐ {product.rating?.rate}</span>
          <span className="rating-count">({product.rating?.count} reviews)</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
