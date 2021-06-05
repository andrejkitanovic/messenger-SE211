import React from 'react';

import './User.scss';

import { RiAccountCircleFill } from 'react-icons/ri';

const User = ({ data, setUser }) => {
	const { firstname, lastname, username } = data;
	return (
		<div className="user" onClick={() => setUser(data)}>
			<div className="user__icon">
				<RiAccountCircleFill />
			</div>
			<div className="user__info">
				<div className="user__fullname">
					{firstname} {lastname}
				</div>
				<div className="user__username">{username}</div>
			</div>
		</div>
	);
};

export default User;
