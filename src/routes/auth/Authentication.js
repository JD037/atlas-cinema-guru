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

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = isLogin ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
		axios.post(url, { username, password })
			.then(response => {
				const { accessToken } = response.data;
				console.log('Token received:', accessToken); // Debugging line
				if (accessToken) {
					localStorage.setItem('accessToken', accessToken);
					setUserUsername(username);
					setIsLoggedIn(true);
				} else {
					console.error('No token received.');
				}
			})
			.catch(error => {
				console.error('Error during authentication:', error);
			});
	};

	return (
		<div className="auth-container">
			<div className="auth-header">
				<Button label="Sign In" onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''} />
				<Button label="Sign Up" onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''} />
			</div>
			<form className="auth-form" onSubmit={handleSubmit}>
				{isLogin ? (
					<>
						<Login
							username={username}
							setUsername={setUsername}
							password={password}
							setPassword={setPassword}
						/>
						<Button label="Sign In" type="submit" />
					</>
				) : (
					<>
						<Register
							username={username}
							setUsername={setUsername}
							password={password}
							setPassword={setPassword}
						/>
						<Button label="Sign Up" type="submit" />
					</>
				)}
			</form>
		</div>
	);
};

export default Authentication;
