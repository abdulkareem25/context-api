import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from '../api/products.api'

export const productContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        // const products = await getProducts();
        setProducts([{
            name: 'laptop',
            price: '₹50,000',
            brand: 'Asus',
            ram: '12gb',
            ssd: '512gb'
        }])
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
