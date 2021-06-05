import React, { useEffect, useState } from 'react';

import { setActiveUsers, appendMessage } from '../../store/actions';
import { baseURL } from '../../api/axiosInstance';
import { useSnackbar } from 'notistack';
import {
	// useSelector,
	useDispatch,
} from 'react-redux';
import socketIO from 'socket.io-client';

let socket = null;

const Socket = ({ children }) => {
	const dispatch = useDispatch();

	const [message, setMessage] = useState(null);
	const { enqueueSnackbar } = useSnackbar();
	// const { me } = useSelector((state) => state.user);

	useEffect(() => {
		socket = socketIO(baseURL, {
			query: {
				user: localStorage.getItem('jwToken'),
			},
		});

		socket.on('info', (data) => {
			if (data.message) {
				setMessage(data.message);
			}
			if (data.activeUsers) {
				dispatch(setActiveUsers(data.activeUsers));
			}
		});

		socket.on('message', (data) => {
			if (data.message) {
				dispatch(appendMessage(data.message));
			}
		});

		return () => {
			socket.disconnect();
			socket.off();
		};

		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (message) {
			enqueueSnackbar(message, {
				variant: 'info',
				autoHideDuration: 2500,
				anchorOrigin: {
					horizontal: 'center',
					vertical: 'top',
				},
			});
		}
	}, [message, enqueueSnackbar]);

	return <>{children}</>;
};

export { socket };
export default Socket;
