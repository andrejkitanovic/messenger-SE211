import React, {Suspense} from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Login, Register, Home } from './pages';
import { Authentication, LoadingScreen, Notifications, Socket, Layout } from '../hoc';
import { SnackbarProvider } from 'notistack';

const Routes = () => {
	return (
		<Suspense fallback={<LoadingScreen force/>}>
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
							<Switch>
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
								<Socket>
									<Route path="/" exact component={Home} />
								</Socket>

								<Redirect to="/" />
							</Switch>
						</Layout>
					</Authentication>
				</SnackbarProvider>
			</BrowserRouter>
		</Suspense>
	);
};

export default Routes;
