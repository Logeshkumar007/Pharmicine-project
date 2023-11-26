// src/components/CartItem.js
import React from "react";

const CartItem = ({ item }) => {
  return (
    <div>
      {item.name} - ${item.price}
      {/* <button onClick={() => deletfromcard(item.id)}>Delete</button> */}
    </div>
  );
};

export default CartItem;
