import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ cartItems, updateQuantity }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    updateQuantity(id, delta);
  };

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="cart">
      <h1>장바구니</h1>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>{item.price} 원</p>
                <div className="quantity-selector">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleCheckout} className="checkout-button">결제하기</button>
    </div>
  );
};

export default Cart;
