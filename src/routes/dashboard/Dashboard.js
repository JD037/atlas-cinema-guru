// src/routes/dashboard/Dashboard.js
import './dashboard.css';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/Sidebar';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';
import PropTypes from 'prop-types';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
	return (
		<BrowserRouter>
			<div>
				<Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
				<div className='dash'>
					<Sidebar />
					<Routes>
						<Route path="/home" element={<HomePage />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/watchlater" element={<WatchLater />} />
						<Route path="*" element={<Navigate to="/home" replace />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

Dashboard.propTypes = {
	userUsername: PropTypes.string.isRequired,
	setIsLoggedIn: PropTypes.func.isRequired
}

export default Dashboard;
