import React, { Suspense } from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Login, Register, Home } from './pages';
import { Authentication, LoadingScreen, Notifications, Socket, Layout } from '../hoc';
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
					<Layout>
						<Suspense fallback={<LoadingScreen force />}>
							<Switch>
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
								<Socket>
									<Route path="/" exact component={Home} />
								</Socket>

								<Redirect to="/" />
							</Switch>
						</Suspense>
					</Layout>
				</Authentication>
			</SnackbarProvider>
		</BrowserRouter>
	);
};

export default Routes;
