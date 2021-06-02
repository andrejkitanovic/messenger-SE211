import React from 'react';
import './LoadingScreen.scss';

// import { useSelector } from 'react-redux';

export default function LoadingScreen(props) {
	// const loader = useSelector((state) => state.loader);
	const loader = false;

	if (!loader) {
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
