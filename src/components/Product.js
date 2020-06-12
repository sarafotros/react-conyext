import React,{useContext} from 'react'
import { Grid } from '@material-ui/core';
import {CartContext} from '../components/CartContext'


export default function Product({ item }) {
    const { addItem, isExist, removeItem } = useContext(CartContext);
    const isExistCart = isExist(item.id)
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
				<button
                onClick={() => {
                    if (isExistCart) {
                        removeItem(item.id)
                    } else {
						addItem(item);   
                    }
					}}
				>
					{!isExistCart? 'Add to Basket': 'Remove Item'}
				</button>
			</Grid>
		);
}
