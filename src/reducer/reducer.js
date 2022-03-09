const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_ACCESS_TOKEN': {
			return {
				...state,
				accessToken: action.payload,
			};
		}
		case 'SET_USER': {
			return {
				...state,
				user: action.payload,
			};
		}
		case 'SET_IS_LOADING': {
			return {
				...state,
				isLoading: { ...state.isLoading, ...action.payload },
			};
		}
		case 'SET_IS_ERROR': {
			return {
				...state,
				isError: { ...state.isError, ...action.payload },
			};
		}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export default reducer;
