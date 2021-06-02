import React from 'react';
import './Register.scss';

const Register = (props) => {
	return (
		<div className="register">
			<form action="#" className="register__form form-starter">
				<h1 className="register__title">Create account</h1>

				<div className="register__field form-field">
					<input className="register__field-input form-input" type="text" required placeholder="First Name" />
				</div>

				<div className="register__field form-field">
					<input className="register__field-input form-input" type="text" required placeholder="Last Name" />
				</div>

				<div className="register__field form-field">
					<input className="register__field-input form-input" type="text" required placeholder="Username" />
				</div>

				<div className="register__field form-field">
					<input className="register__field-input form-input" type="text" required placeholder="Email" />
				</div>

				<div className="register__field form-field">
					<input className="register__field-input form-input" type="password" required placeholder="Password" />
					<div className="show-password fas fa-eye-slash"></div>
				</div>

				

				<div className="register__button">
					<button className="form-button" type="submit">
						Register
					</button>
				</div>

                <div className="register__link">
					<a className="link" href="/login">
						Already have an account? Back to login
					</a>
				</div>
			</form>
		</div>
	);
};

export default Register;
