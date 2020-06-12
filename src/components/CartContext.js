import React, { createContext, useState } from 'react';

const CartContext = createContext({
    cartData: [],
    addItem: (item) => { },
    count: 0,
})
export { CartContext };
export default function CartContextProvider({ children }) {

    const [data, setData] = useState([])
    const addItem = (item) => {
        setData([...data, item])
    }

    return (
        <CartContext.Provider value={{cartData:data, count:data.length,addItem:addItem }}>
            {children}
        </CartContext.Provider>
    );
}
