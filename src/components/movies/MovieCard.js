// src/components/movies/MovieCard.js

import React, { useState, useEffect } from 'react';
import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const MovieCard = ({ movie }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isWatchLater, setIsWatchLater] = useState(false);

	useEffect(() => {
		// Fetch the user's list of favorites and watch later titles
		axios.get('/api/titles/favorite/').then(response => {
			if (response.data.some(fav => fav.imdbId === movie.imdbId)) {
				setIsFavorite(true);
			}
		});

		axios.get('/api/titles/watchlater/').then(response => {
			if (response.data.some(watch => watch.imdbId === movie.imdbId)) {
				setIsWatchLater(true);
			}
		});
	}, [movie.imdbId]);

	const handleClick = (type) => {
		const url = `/api/titles/${type}/${movie.imdbId}`;
		const method = (type === 'favorite' && isFavorite) || (type === 'watchlater' && isWatchLater) ? 'delete' : 'post';

		axios({ method, url }).then(() => {
			if (type === 'favorite') {
				setIsFavorite(!isFavorite);
			} else if (type === 'watchlater') {
				setIsWatchLater(!isWatchLater);
			}
		});
	};

	return (
		<li className="movie-card">
			<h3>{movie.title}</h3>
			<p>{movie.synopsis}</p>
			<div className="genres">
				{movie.genres.map((genre, index) => (
					<span key={index} className="genre-tag">{genre}</span>
				))}
			</div>
			<div className="actions">
				<FontAwesomeIcon icon={faHeart} onClick={() => handleClick('favorite')} className={isFavorite ? 'active' : ''} />
				<FontAwesomeIcon icon={faClock} onClick={() => handleClick('watchlater')} className={isWatchLater ? 'active' : ''} />
			</div>
		</li>
	);
};

export default MovieCard;
