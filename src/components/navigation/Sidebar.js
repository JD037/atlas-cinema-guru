// src/components/navigation/Sidebar.js
import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity.js';

const SideBar = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState("home");
	const [small, setSmall] = useState(true);
	const [activities, setActivities] = useState([]);
	const [showActivities, setShowActivities] = useState(false);
	const setPage = (pageName) => {
		setSelected(pageName);
		const route = `/${pageName.replace(/\s+/g, '').toLowerCase()}`;
		navigate(route);
	};
	const accessToken = localStorage.getItem('accessToken')
	const config = {
		headers: { Authorization: `Bearer ${accessToken}` }
	};
	useEffect(() => {
		axios.get('http://localhost:8000/api/activity', config).then(response => {
			setActivities(response.data.slice(0, 10));
		}).catch(error => {
			console.error("This is so embarrassing, I could not find your activities:", error);
		});
	}, []);
	return (
		<nav
			className={`sidebar-nav ${small ? '' : 'wide'}`}
			onMouseEnter={() => setSmall(false)}
			onMouseLeave={() => setSmall(true)}
		>
			<ul className={`sidebar-nav-ul  ${small ? '' : 'wide'}`}>
				<li onClick={() => setPage("Home")}>
					<FontAwesomeIcon icon={faFolder} />
					<span>Home</span>
				</li>
				<li onClick={() => setPage("Favorites")}>
					<FontAwesomeIcon icon={faStar} />
					<span>Favorites</span>
				</li>
				<li onClick={() => setPage("Watch Later")}>
					<FontAwesomeIcon icon={faClock} />
					<span>Watch Later</span>
				</li>
			</ul>
			<div className='latest-activities-div'>
				<h1 className='sidebar-activity-title'>Latest Activities</h1>
				<ul className='sidebar-activity-ul'>
					{activities.map((activity) => (
						<Activity ley={activity.id} activity={activity} />
					))}
				</ul>
			</div>
		</nav>
	)
}

export default SideBar;