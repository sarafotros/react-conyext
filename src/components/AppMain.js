import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product'

export default function AppMain() {
	const [data, setData] = useState([
		{
			id: 1,
			title: 'React',
			price: 30,
			image:
				'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G',
		},
		{
			id: 2,
			title: 'Java',
			price: 40,
			image:
				'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/t12BZqmRoulvCTDhoYie',
		},
		{
			id: 3,
			title: 'Node Js',
			price: 60,
			image:
				'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nlMKa4JeSBysXoj7pa90',
		},
		{
			id: 4,
			title: 'Redux',
			price: 50,
			image:
				'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/cWlkfXnMQKepNeIaRItV',
		},
		{
			id: 5,
			title: 'Python',
			price: 70,
			image:
				'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/BFMMlbcQvml9HSqXcvNp',
		},
	]);
	return (
		<Grid container
			style={{ width: '100%', height: 'auto', backgroundColor: '#e1e1e1' }}
        >
            {data.map((item) => 
                <Product item={item} key={item.id}/>
                
            )}
        </Grid>
	);
}
