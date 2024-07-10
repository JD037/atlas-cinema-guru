// src/components/movies/Tag.js

import React, { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
	const [selected, setSelected] = useState(false);

	const handleTag = () => {
		if (selected) {
			setGenres(genres.filter(g => g !== genre));
		} else {
			setGenres([...genres, genre]);
		}
		setSelected(!selected);
	};

	return (
		<li onClick={handleTag} className={selected ? 'selected' : ''}>
			{genre}
		</li>
	);
};

export default Tag;
