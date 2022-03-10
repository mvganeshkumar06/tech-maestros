import React, { useReducer, useEffect } from 'react';
import AppContext from './app-context';
import reducer from '../reducer/reducer';
import jwtDecode from 'jwt-decode';

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		user: null,
		studentProfile: {},
		accessToken: null,
		sortOption: '',
		filterOptions: {},
		isLoading: {
			login: false,
			register: false,
			getStudents: false,
			getColleges: false,
			sendMails: false,
		},
		isError: {
			login: false,
			register: false,
			getStudents: false,
			getColleges: false,
			sendMails: false,
		},
	});

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		const userType = localStorage.getItem('userType');
		if (accessToken) {
			dispatch({
				type: 'SET_ACCESS_TOKEN',
				payload: accessToken,
			});

			const _user = jwtDecode(accessToken);
			const user = { ..._user, userType: userType };
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
