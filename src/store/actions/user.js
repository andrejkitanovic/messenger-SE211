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

// export const setPasswordError = (payload) => {
// 	return {
// 		type: actionTypes.SET_PASSWORD_ERR,
// 		payload,
// 	};
// };

// export const setUsernameError = (payload) => {
// 	return {
// 		type: actionTypes.SET_USERNAME_ERR,
// 		payload,
// 	};
// };

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
				// localStorage.setItem('jwToken', response.data.token);
				// dispatch(getCurrentUser());
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

// export const updateUser = (userId, username, type, email, password) => {
// 	return (dispatch) => {
// 		dispatch(startLoading());
// 		const id = localStorage.getItem('id');
// 		axios
// 			.post(`user/change/${userId}`, { id, username, type, email, password })
// 			.then(({ data }) => {
// 				dispatch(setOtherUsers(data.data));
// 				dispatch(successNotification(data.message));
// 				dispatch(finishLoading());
// 			})
// 			.catch((error) => {
// 				dispatch(errorsNotification(error.response.data.message));
// 				dispatch(finishLoading());
// 				return false;
// 			});
// 	};
// };

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
				// dispatch(errorsNotification(response.data.message));
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
				// dispatch(errorsNotification(response.data.message));
				dispatch(finishLoading());
			});
	};
};

// export const deleteUser = (id) => {
// 	return (dispatch) => {
// 		dispatch(startLoading());
// 		axios
// 			.delete(`user/${id}/${localStorage.getItem('id')}`)
// 			.then(({ data }) => {
// 				dispatch(setOtherUsers(data.data));
// 				dispatch(successNotification(data.message));
// 				dispatch(finishLoading());
// 			})
// 			.catch((error) => {
// 				dispatch(errorsNotification(error.response.data.message));
// 				dispatch(finishLoading());
// 			});
// 	};
// };

// export const editUserAccess = (userId, access) => {
// 	return (dispatch) => {
// 		dispatch(startLoading());
// 		const id = localStorage.getItem('id');
// 		axios
// 			.post(`user/access/${userId}`, { id, access })
// 			.then(({ data }) => {
// 				dispatch(setOtherUsers(data.data));
// 				dispatch(successNotification(data.message));
// 				dispatch(finishLoading());
// 			})
// 			.catch((error) => {
// 				dispatch(errorsNotification(error.response.data.message));
// 				dispatch(finishLoading());
// 				return false;
// 			});
// 	};
// };
