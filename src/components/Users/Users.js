import React from 'react';

import './Users.scss';

import { useSelector } from 'react-redux';

const User = ({ setUser }) => {
	const { otherUsers, activeUsers } = useSelector((state) => state.user);

	return (
		<div className="users">
			{otherUsers &&
				otherUsers.map((user) => {
					let isActive = activeUsers.some((check) => check.user === user._id)
					return (
						<div className="user" onClick={() => setUser(user)}>
							<div className={`user__icon ${isActive ? 'active' : ''}`}>
							</div>
							<div className="user__info">
								<div className="user__fullname">
									{user.firstname} {user.lastname}
								</div>
								<div className="user__username">{user.username}</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default User;


