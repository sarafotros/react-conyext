import React,{useContext} from 'react'
import { Grid } from '@material-ui/core';
import {CartContext} from '../components/CartContext'


export default function Product({ item }) {
    const {addItem} = useContext(CartContext)
    return (
			<Grid
				item
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 10,
					flexDirection: 'column',
				}}
			>
				<img src={item.image} style={{ width: '40%' }} alt="logo" />
				<p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => {
                addItem(item)
            }}>Add to Basket</button>
			</Grid>
		);
}
