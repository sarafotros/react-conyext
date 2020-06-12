import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

export default function Menu() {

   const {count} = useContext(CartContext);

    return (
        <div style={{width:'100%', backgroundColor: '#000', color:'#fff' , height: 30, textAlign: 'center'}}>
            <span>Your Basket: {count}</span>
        </div>
    )
}
