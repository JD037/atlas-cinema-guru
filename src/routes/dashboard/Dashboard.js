import React from 'react';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/Sidebar';
import './dashboard.css';

const Dashboard = ({ username, setIsLoggedIn }) => {
	return (
		<div className="dashboard">
			<Header userUsername={username} setIsLoggedIn={setIsLoggedIn} />
			<Sidebar />
		</div>
	);
};

export default Dashboard;
