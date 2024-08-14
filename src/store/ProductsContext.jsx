/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context with default values
export const ProductsContext = createContext({
  products: [],
  loading: true,
  error: null,
});

// Create the provider component
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productContext = { products, loading, error };

  return (
    <ProductsContext.Provider value={productContext}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
