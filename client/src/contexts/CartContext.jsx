import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(null);

  return (
    <CartContext.Provider value={{ cartId, setCartId }}>
      {children}
    </CartContext.Provider>
  );
};