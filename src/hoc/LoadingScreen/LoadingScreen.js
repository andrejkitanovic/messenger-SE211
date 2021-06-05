import React from 'react';
import './LoadingScreen.scss';

import { useSelector } from 'react-redux';

const LoadingScreen = ({force}) => {
	const loader = useSelector((state) => state.loader);

	if (!loader && !force) {
		return null;
	}

	return (
		<div className="LoadingScreen">
			<div id="loader">
				<div id="shadow"></div>
				<div id="box"></div>
			</div>
		</div>
	);
}

export default LoadingScreen;
