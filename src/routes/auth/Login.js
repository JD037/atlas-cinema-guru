// src/routes/auth/Login.js
import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, setUsername, password, setPassword }) => {
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
				inputAttributes={{ autoComplete: "current-password" }}
			/>
			<Button label="Sign In" type="submit" />
		</div>
	);
};

export default Login;
