import React from 'react';

import './Me.scss';

import { RiAccountCircleFill } from 'react-icons/ri';

const Me = ({data}) => {
	const {firstname,lastname,username,email} = data;
	return (
		<div className="me">
			<div className="me__icon">
				<RiAccountCircleFill />
			</div>
			<div className="me__info">
				<div className="me__fullname">{firstname} {lastname}</div>
				<div className="me__username">{username}</div>
			</div>
			<div className="me__email">{email}</div>
		</div>
	);
};

export default Me;
