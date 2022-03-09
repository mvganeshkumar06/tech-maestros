export const fetchLogin = (state, dispatch, data) => {
	return fetch('https://tech-maestros-api.herokuapp.com/auth/login', {
		method: 'POST',
		body: JSON.stringify({
			registrationNumber: data.username,
			password: data.password,
			user: data.userType,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((res) => {
			console.log(res);
			localStorage.setItem('accessToken', res.accessToken);
			dispatch({
				type: 'SET_ACCESS_TOKEN',
				payload: res.accessToken,
			});

			dispatch({
				type: 'SET_IS_LOADING',
				payload: { login: false },
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
