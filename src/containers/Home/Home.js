import React, { useEffect, useState } from 'react';

import './Home.scss';
import { Logout, Users, Me, ChatWith, ChatBox, ChatInput } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { getOtherUsers, getCurrentUser, getMessages, sendMessage } from '../../store/actions';

const Home = (props) => {
	const dispatch = useDispatch();
	const { me, activeUsers } = useSelector((state) => state.user);
	const previousUserId = useSelector((state) => state.message.user);

	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		dispatch(getOtherUsers());

		if (!me) {
			dispatch(getCurrentUser());
		}
		//eslint-disable-next-line
	}, []);

	const setSelectedUserHandler = (user) => {
		if (previousUserId !== user._id) {
			setSelectedUser(user);
			dispatch(getMessages(user._id));
		}
	};

	const sendMessageToUser = (data) => {
		const idOfUser = selectedUser._id;

		dispatch(sendMessage(idOfUser, data));
	};

	return (
		<div className="home box-main">
			<div className="home__top">
				{me && <Me data={me} />}
				<Logout />
			</div>
			<div className="home__main">
				<div className="home__list">
					<Users setUser={setSelectedUserHandler} />
				</div>

				<div className="home__chat">
					{selectedUser && (
						<>
							<ChatWith label={selectedUser.username} />
							<ChatBox myId={me._id} />
							<ChatInput sendMessage={sendMessageToUser} />
						</>
					)}
				</div>
			</div>
			<div className="home__bottom">
				{activeUsers.length} Live Users
			</div>
		</div>
	);
};

export default Home;
