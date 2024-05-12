import React, { useEffect, useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  
  const handleAddToCart = (product) => {
    console.log(product);
    localStorage.reactItem = JSON.stringify(product);
  };
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-info">
        <div className="product-name">{product.title}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">{product.price} $</div>
        <div className="product-rating">★★★★★ 4.9</div>
        <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetails;
