import React, { createContext, useReducer } from 'react';
import { useState } from 'react';

const ProductsContext = createContext({
	error: false,
	loading: true,
	success: false,
	products: [],
	dispatch: () => {},
});
export { ProductsContext };

function reducer(state, action) {
	switch (action.type) {
		case 'SUCCESS':
			return {
				error: false,
				loading: false,
				success: true,
				products: [...action.data],
			};
		case 'ERROR':
			return {
				error: true,
				loading: false,
				success: false,
				products: [],
			};

		default:
			break;
	}
}

export default function ProductsContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		error: false,
		loading: true,
		success: false,
		products: [],
	});
	return (
		<ProductsContext.Provider
			value={{
				error: state.error,
				success: state.success,
				loading: state.loading,
				products: state.products,
				dispatch: dispatch,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
}
