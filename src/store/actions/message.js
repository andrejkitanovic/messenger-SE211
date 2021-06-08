import * as actionTypes from './actionTypes';
import axios from '../../api/axiosInstance';

import { startLoading, finishLoading } from './loader';
import { errorsNotification } from './notification';
import { socket } from '../../hoc/Socket/Socket';

export const setMessages = (payload) => {
	return {
		type: actionTypes.SET_MESSAGES,
		payload,
	};
};

export const setChatWith = (payload) => {
	return {
		type: actionTypes.SET_CHAT_WITH,
		payload,
	};
};

export const appendMessage = (payload) => {
	return {
		type: actionTypes.APPEND_MESSAGE,
		payload,
	};
};

export const getMessages = (id) => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.get(`message?user=${id}`)
			.then(({ data }) => {
				dispatch(setChatWith(id));
				dispatch(setMessages(data.data));
				dispatch(finishLoading());
			})
			.catch(({ response }) => {
				// dispatch(errorsNotification(response.data.message));
				dispatch(finishLoading());
			});
	};
};

export const sendMessage = (id, data) => {
	return (dispatch) => {
		axios
			.post(`message?user=${id}`, data, { 'Content-Type': 'multipart/form-data' })
			.then(({ data }) => {
				dispatch(appendMessage(data.data));
				socket.emit('message', data.data);
			})
			.catch(({ response }) => {
				dispatch(errorsNotification(response.data.message));
			});
	};
};
