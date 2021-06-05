import React, { useEffect, useState } from 'react';

import { baseURL } from '../../api/axiosInstance';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import socketIO from 'socket.io-client';

const Socket = ({ children }) => {
	const [connection, setConnection] = useState(null);
	const { enqueueSnackbar } = useSnackbar();
	const { me } = useSelector((state) => state.user);

	useEffect(() => {
		const socket = socketIO(baseURL, {
			query: {
				user: me && me.username,
			},
		});

		socket.on('info', (data) => {
			setConnection(data);
		});

		return () => {
			socket.disconnect();
			socket.off();
		};

		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (connection) {
			enqueueSnackbar(connection, {
				variant: 'info',
				autoHideDuration: 2500,
				anchorOrigin: {
					horizontal: 'center',
					vertical: 'top',
				},
			});
		}
	}, [connection, enqueueSnackbar]);

	return <>{children}</>;
};

export default Socket;
