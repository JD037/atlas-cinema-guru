import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/Sidebar';
import HomePage from './HomePage'; // This will be created later
import Favorites from './Favorites'; // This will be created later
import WatchLater from './WatchLater'; // This will be created later
import './dashboard.css';

const Dashboard = ({ username, setIsLoggedIn }) => {
	return (
		<BrowserRouter>
			<div className="dashboard">
				<Header userUsername={username} setIsLoggedIn={setIsLoggedIn} />
				<Sidebar />
				<div className="dashboard-content">
					<Routes>
						<Route path="/home" element={<HomePage />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/watchlater" element={<WatchLater />} />
						<Route path="*" element={<Navigate to="/home" />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Dashboard;
