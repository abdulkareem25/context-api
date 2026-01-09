import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from '../api/products.api'

export const productContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        setProducts(await getProducts());
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <productContext.Provider value={products}>
            {children}
        </productContext.Provider>
    )
}

export default ProductsProvider
