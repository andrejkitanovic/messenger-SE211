import React from 'react';

import './Logout.scss';

import { withRouter } from 'react-router-dom';

const Logout = (props) => {
	const logoutHandler = (e) => {
		e.preventDefault();
		localStorage.removeItem('jwToken');
		props.history.push('/login');
	};

	return (
		<form className="logout" onSubmit={logoutHandler}>
			<button className="logout__button" type="submit">
				Izloguj se
			</button>
		</form>
	);
};

export default React.memo(withRouter(Logout));
