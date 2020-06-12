import React from 'react';
import './App.css';
import AppMain from './components/AppMain';
import Menu from './components/Menu'
import CartContextProvider from './components/CartContext';


function App() {
  return (
		<div>
			<CartContextProvider>
				<Menu />
				<AppMain />
			</CartContextProvider>
		</div>
	);
}

export default App;
