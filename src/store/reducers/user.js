import * as actionTypes from '../actions/actionTypes';

const initialState = {
	me: null,
	otherUsers: null,
	usernameError: null,
	passwordError: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				me: action.payload,
			};
		case actionTypes.SET_OTHER_USERS:
			return {
				...state,
				otherUsers: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
