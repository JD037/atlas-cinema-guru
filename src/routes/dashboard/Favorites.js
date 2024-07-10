// src/routes/dashboard/Favorites.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

const Favorites = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8000/api/titles/favorite/')
			.then(response => {
				setMovies(response.data);
			})
			.catch(error => {
				console.error('Error loading favorite movies:', error);
			});
	}, []);

	return (
		<div className="favorites-page">
			<h1>Movies you like</h1>
			<ul className="movie-list">
				{movies.map(movie => (
					<MovieCard key={movie.imdbId} movie={movie} />
				))}
			</ul>
		</div>
	);
};

export default Favorites;
