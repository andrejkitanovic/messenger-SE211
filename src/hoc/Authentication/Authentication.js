import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function Authentication({ history, children }) {
	useEffect(() => {
		unathenticated();
		const unlisten = history.listen(() => {
			unathenticated();
			window.scrollTo(0, 0);
			document.body.style.overflow = 'unset';
		});
		return () => {
			unlisten();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const unathenticated = () => {
		console.log(history.location.pathname)
		if (!localStorage.getItem('jwToken') && (history.location.pathname !== '/login' && history.location.pathname !== '/register')) {
			return history.push('/login');
		}
	};

	return <>{children}</>;
}

export default withRouter(Authentication);
