import React from 'react';

import './User.scss';
import { RiAccountCircleFill } from 'react-icons/ri';

const User = ({ username }) => {
	return (
		<div className="user">
			<div className="user__icon">
				<RiAccountCircleFill />
			</div>
			<div className="user__username">andrej213</div>
		</div>
	);
};

export default User;
