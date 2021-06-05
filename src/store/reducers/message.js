import * as actionTypes from '../actions/actionTypes';

const initialState = {
	user: null,
	messages: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_MESSAGES:
			return {
				...state,
				messages: action.payload,
			};
		case actionTypes.SET_CHAT_WITH:
			return {
				...state,
				user: action.payload,
			};
		case actionTypes.APPEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
