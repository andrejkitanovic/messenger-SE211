// import * as actionTypes from '../actions/actionTypes';

const initialState = {
	account: null,
	otherUsers: null,
	usernameError: null,
	passwordError: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// case actionTypes.SET_USER:
		// 	return {
		// 		...state,
		// 		account: action.payload,
		// 	};
		// case actionTypes.SET_OTHER_USERS:
		// 	return {
		// 		...state,
		// 		otherUsers: action.payload,
		// 	};
		// case actionTypes.SET_PASSWORD_ERR:
		// 	return {
		// 		...state,
		// 		passwordError: action.payload,
		// 		usernameError: null,
		// 	};
		// case actionTypes.SET_USERNAME_ERR:
		// 	return {
		// 		...state,
		// 		usernameError: action.payload,
		// 		passwordError: null,
		// 	};
		default:
			return state;
	}
};

export default reducer;
