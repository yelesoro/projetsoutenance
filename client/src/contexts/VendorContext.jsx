import { createContext, useContext, useState } from "react";

const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [vendorInfo, setVendorInfo] = useState({
        id_vendor: "",
        id_user: "",
        nom : "",
        phone : ""
  });
  const [vendorStock, setVendorStock] = useState({
    id_stock : "",
    quantity : "",
    desription : ""
  });

  return (
    <VendorContext.Provider value={{ vendorInfo, setVendorInfo, vendorStock, setVendorStock }}>
      {children}
    </VendorContext.Provider>
  );
};

export const useVendor = () => {
  return useContext(VendorContext);
};

