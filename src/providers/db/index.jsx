import { createContext, useState } from "react"

export const DBProductsContext = createContext();

export const DBProductsProviders = ({ children }) => {

    const [productList, setProductList] = useState({ "userData": 
    { "zipcode": "", 
        "offers": 
            [ { "name": "Oferta 1", "price": 5099, "id": 1, "isSelected": false }, 
            { "name": "Oferta 2", "price": 10099, "id": 2, "isSelected": false }, 
            { "name": "Oferta 3", "price": 15099, "id": 3, "isSelected": false } ] } });

    return(
        <DBProductsContext.Provider value={{productList, setProductList}}>
            {children}
        </DBProductsContext.Provider>
    );
};