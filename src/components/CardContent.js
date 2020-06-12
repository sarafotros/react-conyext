import React,{useContext} from 'react';
import { Grid } from '@material-ui/core';
import { CartContext } from '../components/CartContext';
import Product from './Product';

export default function CardContent() {

    const {cartData} = useContext(CartContext);
    return (
			<Grid
				container
				style={{ width: '100%', height: 'auto', backgroundColor: '#B388FF' }}
        >
            <Grid item lg={12}>Items of Basket</Grid>
				{cartData.map((item) => (
					<Product item={item} key={item.id} />
				))}
			</Grid>
		);
}
