import React from 'react';

import './Login.scss';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../../store/actions';
import { formValuesToObject } from '../../helpers';

const Login = (props) => {
	const dispatch = useDispatch();

	const goToHome = () => {
		props.history.push('/');
	};

	const loginFormHandler = (e) => {
		e.preventDefault();
		let body = formValuesToObject(e.target.elements);

		dispatch(login(body, goToHome));
	};

	return (
		<form action="#" className="login box-starter" onSubmit={loginFormHandler}>
			<h1 className="login__title">Ulogujte se</h1>

			<div className="login__field form-field">
				<input
					className="login__field-input form-input"
					name="email"
					type="text"
					required
					min="3"
					placeholder="Email / Korisnicko ime"
				/>
			</div>

			<div className="login__field form-field">
				<input className="login__field-input form-input" name="password" type="password" required placeholder="Sifra" />
				<div className="show-password fas fa-eye-slash"></div>
			</div>

			<div className="login__button">
				<button className="form-button" type="submit">
					Uloguj se
				</button>
			</div>

			<div className="login__link">
				<Link className="link" to="/register">
					Nemate nalog? Kreirajte novi
				</Link>
			</div>
		</form>
	);
};

export default Login;
