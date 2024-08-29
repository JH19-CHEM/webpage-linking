import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductList.css';

const ProductList = ({ addToCart, cartCount }) => {
  const navigate = useNavigate();
  
  return (
    <div className="product-list-page">
      <div className="black-box">
        <div className="cart-info">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
      <div className="main-content">
        <div className="product-list">
        </div>
      </div>
    </div>
  );
};

export default ProductList;
