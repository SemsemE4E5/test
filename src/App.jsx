import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Navbar from './Navbar';
import OurTeam from './OurTeam';
import ProductDetails from './ProductDetails';
import Products from './Products';
import Slider from './Slider';

export function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = 'https://dummyjson.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log('Fetched products:', data.products); // Log fetched products
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message); // Set error state
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Render error message if there's an error
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<><Navbar/> <Slider /><Products products={products} /></>}
        />
        <Route path="/product/:productId" element={<><Navbar /> <ProductDetailsWrapper /></>} />
        <Route path="/Contact" element={<><Navbar /> <Contact /></>} />
        <Route path="/OurTeam" element={<><Navbar /> <OurTeam /></>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

function ProductDetailsWrapper() {
  let { productId } = useParams();
  const handleAddToCart = (product) => {
    // Implement your logic for adding the product to the cart
    console.log("Adding product to cart:", product);
  };

  return <ProductDetails productId={productId} onAddToCart={handleAddToCart} />;
}

