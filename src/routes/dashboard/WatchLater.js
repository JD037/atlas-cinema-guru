// src/routes/dashboard/WatchLater.js
import React, { useState, useEffect } from 'react';
import api from '../../api'; // Import the configured Axios instance
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

const WatchLater = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		api.get('/api/titles/watchlater/')
			.then(response => {
				setMovies(response.data);
			})
			.catch(error => {
				console.error('Error loading watch later movies:', error);
			});
	}, []);

	return (
		<div className="watch-later-page">
			<h1>Movies you like</h1>
			<ul className="movie-list">
				{movies.map(movie => (
					<MovieCard key={movie.imdbId} movie={movie} />
				))}
			</ul>
		</div>
	);
};

export default WatchLater;
