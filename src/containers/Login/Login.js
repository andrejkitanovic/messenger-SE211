import React from 'react';

import './Login.scss';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../../store/actions';
import { formValuesToObject, displayErrorMessage, resetErrorMessage } from '../../helpers';

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
					onInput={resetErrorMessage}
					onInvalid={(e) => displayErrorMessage(e, 'Korisnicko ime je obavezno polje')}
					placeholder="Email / Korisnicko ime"
				/>
			</div>

			<div className="login__field form-field">
				<input
					className="login__field-input form-input"
					name="password"
					type="password"
					required
					onInput={resetErrorMessage}
					onInvalid={(e) => displayErrorMessage(e, 'Sifra je obavezno polje')}
					placeholder="Sifra"
				/>
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
