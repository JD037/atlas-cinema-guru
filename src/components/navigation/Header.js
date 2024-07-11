// src/components/navigation/Header.js
import './navigation.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
	const logout = () => {
		console.log("logging you out");
		localStorage.removeItem('accessToken');
		setIsLoggedIn(false);
	};
	return (
		<nav className='navbar'>
			<div className="app-name">
				<p>Cinema Guru</p>
			</div>
			<div className="user-links">
				<div className="user-photo">
					<img src="https://picsum.photos/100/100" alt="avatar" />
				</div>
				<div className="welcome-text">
					<p>Welcome, {userUsername}!</p>
				</div>
				<div className='logout-div'>
					<span onClick={logout}>
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
						&nbsp;Logout
					</span>
				</div>
			</div>
		</nav>
	);
}

Header.propTypes = {
	userUserName: PropTypes.string.isRequired,
	setIsLoggedIn: PropTypes.func.isRequired,
}

export default Header;