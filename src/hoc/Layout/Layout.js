import React from 'react';

import './Layout.scss';

import { withRouter } from 'react-router-dom';

const Layout = ({ children }) => {
	return (
		<main>
			<div className="layout">{children}</div>
		</main>
	);
};

export default withRouter(Layout);
