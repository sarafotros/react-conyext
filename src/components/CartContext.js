import React, { createContext, useState } from 'react';

const CartContext = createContext({
    cartData: [],
    addItem: (item) => { },
    count: 0,
    isExist: (id) => { },
    removeItem:(id)=>{}
})
export { CartContext };
export default function CartContextProvider({ children }) {

    const [data, setData] = useState([])
    const addItem = (item) => {
        setData([...data, item])
    }

    const isExist = (id) => {
        let count = 0
        data.map((item) => {
            if (item.id === id) {
                count= count+1
            }
        })
        return count===0 ? false:true
    }

    const removeItem = (id) => {
        setData(data => 
            data.filter(item=> item.id !== id)
        )
    }

    return (
			<CartContext.Provider
				value={{
					cartData: data,
					count: data.length,
					addItem: addItem,
					isExist: isExist,
					removeItem: removeItem,
				}}
			>
				{children}
			</CartContext.Provider>
		);
}
