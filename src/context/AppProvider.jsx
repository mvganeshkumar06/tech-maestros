import React, { useReducer, useEffect } from 'react';
import AppContext from './app-context';
import reducer from '../reducer/reducer';
import jwtDecode from 'jwt-decode';

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		user: undefined,
		accessToken: '',
		sortOption: '',
		filterOptions: {},
		isLoading: {
			login: false,
		},
		isError: {
			login: false,
		},
	});

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken) {
			dispatch({
				type: 'SET_ACCESS_TOKEN',
				payload: accessToken,
			});

			const user = jwtDecode(accessToken);
			console.log(state);
			dispatch({
				type: 'SET_USER',
				payload: user,
			});
		}
	}, []);

	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;
