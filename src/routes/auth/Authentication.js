// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('Form submitted');

		const url = isLogin ? '/api/auth/login' : '/api/auth/register';
		const data = { username, password };

		try {
			const response = await axios.post(url, data, {
				headers: {
					'Content-Type': 'application/json',
				}
			});
			console.log('Response:', response);
			const { accessToken } = response.data;
			if (accessToken) {
				localStorage.setItem('accessToken', accessToken);
				setUserUsername(username);
				setIsLoggedIn(true);
			} else {
				console.error('No token received.');
			}
		} catch (error) {
			if (error.response) {
				console.error('Error during authentication:', error.response.data);
			} else {
				console.error('Error during authentication:', error.message);
			}
		}
	};

	return (
		<div className="auth-container">
			<div className="auth-header">
				<Button label="Sign In" onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''} />
				<Button label="Sign Up" onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''} />
			</div>
			<form onSubmit={handleSubmit}>
				{isLogin ? (
					<Login
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
					/>
				) : (
					<Register
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
					/>
				)}
				<button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
			</form>
		</div>
	);
};

export default Authentication;
