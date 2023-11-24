// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div>
      {item.name} - ${item.price}
    </div>
  );
};

export default CartItem;
