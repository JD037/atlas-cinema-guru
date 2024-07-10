// src/components/navigation/Sidebar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import './navigation.css';

const Sidebar = () => {
	const [selected, setSelected] = useState('home');
	const [activities, setActivities] = useState([]);
	const navigate = useNavigate();

	const setPage = (pageName) => {
		setSelected(pageName);
		navigate(`/${pageName}`);
	};

	useEffect(() => {
		axios.get('http://localhost:8000/api/activity', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then(response => {
				setActivities(response.data);
			})
			.catch(error => {
				console.error('Error fetching activities:', error);
			});
	}, []);

	return (
		<nav className="sidebar">
			<ul className="navigation">
				<li onClick={() => setPage('home')} className={selected === 'home' ? 'active' : ''}>Home</li>
				<li onClick={() => setPage('favorites')} className={selected === 'favorites' ? 'active' : ''}>Favorites</li>
				<li onClick={() => setPage('watchlater')} className={selected === 'watchlater' ? 'active' : ''}>Watch Later</li>
			</ul>
			<ul className="activities">
				{activities.slice(0, 10).map((activity, index) => (
					<Activity key={index} {...activity} />
				))}
			</ul>
		</nav>
	);
};

export default Sidebar;
