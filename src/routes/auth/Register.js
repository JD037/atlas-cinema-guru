// src/routes/auth/Register.js
import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, setUsername, password, setPassword }) => {
	return (
		<div>
			<Input
				label="Username"
				type="text"
				value={username}
				setValue={setUsername}
				icon={<FontAwesomeIcon icon={faUser} />}
				inputAttributes={{ autoComplete: "username" }}
			/>
			<Input
				label="Password"
				type="password"
				value={password}
				setValue={setPassword}
				icon={<FontAwesomeIcon icon={faKey} />}
				inputAttributes={{ autoComplete: "new-password" }}
			/>
			<Button label="Sign Up" type="submit" />
		</div>
	);
};

export default Register;
