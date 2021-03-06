import * as actionTypes from '../actions/actionTypes';

const initialState = {
	me: null,
	otherUsers: null,
	activeUsers: [],
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
		case actionTypes.SET_ACTIVE_USERS:
			return {
				...state,
				activeUsers: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
