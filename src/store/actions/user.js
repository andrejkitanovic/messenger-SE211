import * as actionTypes from './actionTypes';
import axios from '../../api/axiosInstance';

import { startLoading, finishLoading } from './loader';
import { errorsNotification, successNotification } from './notification';

export const setUser = (payload) => {
	return {
		type: actionTypes.SET_USER,
		payload,
	};
};

export const setOtherUsers = (payload) => {
	return {
		type: actionTypes.SET_OTHER_USERS,
		payload,
	};
};

export const setActiveUsers = (payload) => {
	return {
		type: actionTypes.SET_ACTIVE_USERS,
		payload,
	};
};

export const login = (object, callback) => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.post('auth/login', object)
			.then(({ data }) => {
				localStorage.setItem('jwToken', data.token);
				dispatch(setUser(data.data));
				dispatch(successNotification(data.message));
				dispatch(finishLoading());
				callback();
			})
			.catch(({ response }) => {
				dispatch(errorsNotification(response.data.message));
				dispatch(finishLoading());
			});
	};
};

export const register = (object, callback) => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.post('auth/register', object)
			.then(({ data }) => {
				dispatch(successNotification(data.message));
				dispatch(finishLoading());
				callback();
			})
			.catch(({ response }) => {
				dispatch(errorsNotification(response.data.message));
				dispatch(finishLoading());
			});
	};
};

export const getOtherUsers = () => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.get(`user`)
			.then(({ data }) => {
				dispatch(setOtherUsers(data.data));
				dispatch(finishLoading());
			})
			.catch(({ response }) => {
				dispatch(finishLoading());
			});
	};
};

export const getCurrentUser = () => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.get(`auth/me`)
			.then(({ data }) => {
				dispatch(setUser(data.data));
				dispatch(finishLoading());
			})
			.catch(({ response }) => {
				dispatch(finishLoading());
			});
	};
};