import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [productInfo, setProductInfo] = useState({
        id: "",
        name: "",
        price: "",
        image: ""
    });

    return (
        <ProductContext.Provider value={{ productInfo, setProductInfo }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    return useContext(ProductContext);
}