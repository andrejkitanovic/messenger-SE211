import React, { useEffect, useState } from 'react';

import './Home.scss';
import { Logout, User, Me, ChatWith, ChatBox, ChatInput } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { getOtherUsers, getCurrentUser } from '../../store/actions';

const Home = (props) => {
	const dispatch = useDispatch();
	const { me, otherUsers } = useSelector((state) => state.user);

	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		dispatch(getOtherUsers());

		if (!me) {
			dispatch(getCurrentUser());
		}
		//eslint-disable-next-line
	}, []);

	const setSelectedUserHandler = (user) => {
		setSelectedUser(user);
	};

	return (
		<div className="home box-main">
			<div className="home__top">
				{me && <Me data={me} />}
				<Logout />
			</div>
			<div className="home__main">
				<div className="home__list">
					{otherUsers &&
						otherUsers.map((user) => <User data={user} setUser={setSelectedUserHandler} key={user.username} />)}
				</div>

				<div className="home__chat">
					{selectedUser && (
						<>
							<ChatWith label={selectedUser.username} />
							<ChatBox />
							<ChatInput />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
