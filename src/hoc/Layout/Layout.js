import React from 'react';
import './Layout.scss';

import { withRouter } from 'react-router-dom';

const Layout = ({ children, history }) => {
	return (
		<div className="Layout">
			<main>
			</main>
		</div>
	);
};

export default withRouter(Layout);
