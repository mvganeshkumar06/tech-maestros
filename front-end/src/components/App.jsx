import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import AppProvider from '../context/AppProvider';
import Router from '../router/Router';

const App = () => {
	return (
		  <ChakraProvider>
			<AppProvider>
				<Router />
			</AppProvider>
		</ChakraProvider>
	);
};

export default App;
