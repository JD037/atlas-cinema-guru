import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="auth-container">
			<div className="auth-header">
				<Button label="Sign In" onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''} />
				<Button label="Sign Up" onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''} />
			</div>
			{isLogin ? (
				<Login
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					setIsLoggedIn={setIsLoggedIn}
					setUserUsername={setUserUsername}
				/>
			) : (
				<Register
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					setIsLoggedIn={setIsLoggedIn}
					setUserUsername={setUserUsername}
				/>
			)}
		</div>
	);
};

export default Authentication;
