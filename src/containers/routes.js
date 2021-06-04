import React from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Login, Register, Home } from './pages';
import { Authentication, LoadingScreen, Notifications } from '../hoc';
import { SnackbarProvider } from 'notistack';

const Routes = () => {
	return (
		<BrowserRouter>
			<SnackbarProvider
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				maxSnack={2}
			>
				<Authentication>
					<LoadingScreen />
					<Notifications />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/" exact component={Home} />
						<Redirect to="/" />
					</Switch>
				</Authentication>
			</SnackbarProvider>
		</BrowserRouter>
	);
};

export default Routes;
