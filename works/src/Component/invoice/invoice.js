// src/components/Invoice.js
import React from 'react';
import CartItem from './cartItem';

const Invoice = ({ cart }) => {
  return (
    <div style={{color:'greenyellow'}}>
      <h2>Invoice</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h4>Total: ₹{cart.reduce((total, item) => total + item.price, 0)}</h4>
    </div>
  );
};

export default Invoice;
