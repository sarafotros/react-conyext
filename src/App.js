import React from 'react';
import './App.css';
import AppMain from './components/AppMain';
import Menu from './components/Menu'
import CartContextProvider from './components/CartContext';
import CardContent from './components/CardContent'


function App() {
  return (
		<div>
			<CartContextProvider>
				<Menu />
        <AppMain />
        <CardContent/>
			</CartContextProvider>
		</div>
	);
}

export default App;
