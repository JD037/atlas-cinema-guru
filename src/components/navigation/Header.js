// src/components/navigation/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
	const logout = () => {
		localStorage.removeItem('accessToken');
		setIsLoggedIn(false);
	};

	return (
		<nav className="header">
			<div>
				<img src="https://picsum.photos/100/100" alt="Avatar" />
				<p>Welcome, {userUsername}!</p>
			</div>
			<div className="logout" onClick={logout}>
				<FontAwesomeIcon icon={faSignOutAlt} />
				<span>Logout</span>
			</div>
		</nav>
	);
};

export default Header;
