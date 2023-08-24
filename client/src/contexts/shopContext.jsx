import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shopInfo, setShopInfo] = useState({
    id_order: "",
    // Autres propriétés liées au magasin
  });

  return (
    <ShopContext.Provider value={{ shopInfo, setShopInfo }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
