// src/routes/auth/Register.js
import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, setUsername, password, setPassword, handleSubmit }) => {
	return (
		<form className="auth-form" onSubmit={handleSubmit}>
			<Input
				label="Username"
				type="text"
				value={username}
				setValue={setUsername}
				icon={<FontAwesomeIcon icon={faUser} />}
			/>
			<Input
				label="Password"
				type="password"
				value={password}
				setValue={setPassword}
				icon={<FontAwesomeIcon icon={faKey} />}
			/>
			<Button label="Sign Up" type="submit" />
		</form>
	);
};

export default Register;
