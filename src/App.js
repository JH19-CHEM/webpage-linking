import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import PaymentComplete from './pages/PaymentComplete';
import CardAdd from './pages/CardAdd';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [addedCard, setAddedCard] = useState(null);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cartItems, { ...product, quantity }];
    setCartItems(updatedCart);
    setCartCount(cartCount + quantity);
  };

  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  return (
    <Routes>
      <Route path="/" element={<ProductList addToCart={addToCart} cartCount={cartCount} />} />
      <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} />} />
      <Route path="/payment" element={<Payment addedCard={addedCard} />} />
      <Route path="/complete" element={<PaymentComplete />} />
      <Route path="/card-add" element={<CardAdd setAddedCard={setAddedCard} />} />
    </Routes>
  );
}

export default App;
