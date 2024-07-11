// src/components/Activity.js
import './components.css'
import React from 'react';

const Activity = ({ activity }) => {
	const dateString = activity.updatedAt;
	const date = new Date(dateString);
	const formattedDate = date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
	let listName = activity.activityType === "favorite" ? "Favorites" : "Watch Later";
	return (
		<li className='activity-list-item'>
			<p>
				<span className='red-text'>{activity.user.username}</span> added <span className='red-text'>{activity.title.title}</span> to {listName} - {formattedDate}
			</p>
		</li>
	);
};

export default Activity;