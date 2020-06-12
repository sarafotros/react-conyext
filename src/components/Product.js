import React from 'react'
import { Grid } from '@material-ui/core';

export default function Product({item}) {
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
            <button>Add to Basket</button>
			</Grid>
		);
}
