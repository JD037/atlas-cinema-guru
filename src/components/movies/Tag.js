// src/components/movies/Tag.js
import './movies.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Tag = ({ genre, filter, genres, setGenres }) => {
	const [selected, setSelected] = useState("false");
	const handleTag = () => {
		if (selected) {
			const revisedGenres = genres.filter((gen) => gen !== genre);
			setGenres(revisedGenres);
			setSelected(false);
		} else {
			const revisedGenres = [...genres, genre];
			setGenres(revisedGenres);
			setSelected(true);
		}
	};
	return (
		<li className={filter ? 'tag selected' : 'tag'} onClick={handleTag}>{genre}</li>
	)
}

Tag.propTypes = {
	genre: PropTypes.string.isRequired,
	filter: PropTypes.bool.isRequired,
	genres: PropTypes.array.isRequired,
	setGenres: PropTypes.func.isRequired
}

export default Tag;