// src/components/dashboard/Dashboard.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/Sidebar';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';
import './dashboard.css';

const Dashboard = ({ username, setIsLoggedIn }) => {
	return (
		<div className="dashboard">
			<Header userUsername={username} setIsLoggedIn={setIsLoggedIn} />
			<Sidebar />
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/watchlater" element={<WatchLater />} />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</div>
	);
};

export default Dashboard;
