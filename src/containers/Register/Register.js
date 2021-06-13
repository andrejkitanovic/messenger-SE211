import React from 'react';

import './Register.scss';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { register } from '../../store/actions';
import { formValuesToObject } from '../../helpers';

const Register = (props) => {
	const dispatch = useDispatch();

	const goToLogin = () => {
		props.history.push('/login');
	};

	const registerFormHandler = (e) => {
		e.preventDefault();
		let body = formValuesToObject(e.target.elements);

		dispatch(register(body, goToLogin));
	};

	return (
		<form action="#" className="register box-starter" onSubmit={registerFormHandler}>
			<h1 className="register__title">Kreiraj nalog</h1>

			<div className="register__field form-field">
				<input
					className="register__field-input form-input"
					name="firstname"
					type="text"
					required
					min="2"
					placeholder="Ime"
				/>
			</div>

			<div className="register__field form-field">
				<input
					className="register__field-input form-input"
					name="lastname"
					type="text"
					required
					min="2"
					placeholder="Prezime"
				/>
			</div>

			<div className="register__field form-field">
				<input
					className="register__field-input form-input"
					name="username"
					type="text"
					min="3"
					required
					placeholder="Korisnicko ime"
				/>
			</div>

			<div className="register__field form-field">
				<input
					className="register__field-input form-input"
					name="email"
					type="text"
					required
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					placeholder="Email"
				/>
			</div>

			<div className="register__field form-field">
				<input
					className="register__field-input form-input"
					name="password"
					type="password"
					required
					min="6"
					placeholder="Sifra"
				/>
				<div className="show-password fas fa-eye-slash"></div>
			</div>

			<div className="register__button">
				<button className="form-button" type="submit">
					Registruj se
				</button>
			</div>

			<div className="register__link">
				<Link className="link" to="/login">
					Vec imate akaunt? Nazad na login
				</Link>
			</div>
		</form>
	);
};

export default Register;
