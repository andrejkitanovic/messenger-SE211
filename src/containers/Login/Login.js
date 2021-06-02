import React from 'react';
import './Login.scss';

const Login = (props) => {
	return (
		<div className="login">
			<form action="#" className="login__form form-starter">
				<h1 className="login__title">Sign in</h1>

				<div className="login__field form-field">
					<input className="login__field-input form-input" type="text" required placeholder="Username" />
				</div>

				<div className="login__field form-field">
					<input className="login__field-input form-input" type="password" required placeholder="Password" />
					<div className="show-password fas fa-eye-slash"></div>
				</div>

				<div className="login__button">
					<button className="form-button" type="submit">
						Login
					</button>
				</div>

				<div className="login__link">
					<a className="link" href="/register">
						Don't have one? Create now
					</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
