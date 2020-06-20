import React from 'react';
import ProductsContextProvider from './contexts/ProductsContext';
import Products from './components/Products';

export default function App2() {
	return (
		<ProductsContextProvider>
			<Products />
		</ProductsContextProvider>
	);
}
