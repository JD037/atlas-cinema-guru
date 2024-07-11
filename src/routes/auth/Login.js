// src/routes/auth/Login.js
import './auth.css';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setUsername, setPassword }) => {

	return (
		<div className='auth-section'>
			<p> Sign in with your account </p>
			<div className="auth-input">
				<Input icon={faUser} label="Username" type="text" className="input-light" value={username} setValue={setUsername} />
				<Input icon={faKey} label="Password" type="password" className="input-light" value={password} setValue={setPassword} />
			</div>
			<div className='auth-submit'>
				<Button label="Sign In" className="button" icon={faKey} type="submit" />
			</div>
		</div>
	);
}

Login.propTypes = {
	username: PropTypes.string,
	password: PropTypes.string,
	setUsername: PropTypes.func,
	setPassword: PropTypes.func,
};

export default Login;
