// src/routes/dashboard/HomePage.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';
import Button from '../../components/general/Button';
import './dashboard.css';

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [minYear, setMinYear] = useState(1970);
	const [maxYear, setMaxYear] = useState(2022);
	const [genres, setGenres] = useState([]);
	const [sort, setSort] = useState("");
	const [title, setTitle] = useState("");

	const loadMovies = useCallback((page) => {
		axios.get('http://localhost:8000/api/titles/advancedsearch', {
			params: { minYear, maxYear, genres, title, sort, page }
		})
			.then(response => {
				setMovies(prevMovies => [...prevMovies, ...response.data]);
			})
			.catch(error => {
				console.error('Error loading movies:', error);
			});
	}, [minYear, maxYear, genres, title, sort]);

	useEffect(() => {
		loadMovies(1);
	}, [minYear, maxYear, genres, title, sort, loadMovies]);

	return (
		<div className="home-page">
			<Filter
				minYear={minYear}
				setMinYear={setMinYear}
				maxYear={maxYear}
				setMaxYear={setMaxYear}
				sort={sort}
				setSort={setSort}
				genres={genres}
				setGenres={setGenres}
				title={title}
				setTitle={setTitle}
			/>
			<ul className="movie-list">
				{movies.map(movie => (
					<MovieCard key={movie.imdbId} movie={movie} />
				))}
			</ul>
			<Button label="Load More.." onClick={() => loadMovies(2)} />
		</div>
	);
};

export default HomePage;
