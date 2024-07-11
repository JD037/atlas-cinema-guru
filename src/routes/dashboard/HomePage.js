// src/routes/dashboard/HomePage.js
import React, { useState, useEffect, useCallback } from 'react';
import api from '../../api'; // Import the configured Axios instance
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
	const [page, setPage] = useState(1);

	const loadMovies = useCallback((page) => {
		api.get('/api/titles/advancedsearch', {
			params: { minYear, maxYear, genres, title, sort, page }
		})
			.then(response => {
				console.log('Response:', response); // Added for debugging
				if (response.data.titles && Array.isArray(response.data.titles)) {
					setMovies(prevMovies => [...prevMovies, ...response.data.titles]);
				} else {
					console.error('Data is not an array:', response.data);
				}
			})
			.catch(error => {
				console.error('Error loading movies:', error.response ? error.response.data : error.message);
			});
	}, [minYear, maxYear, genres, title, sort]);

	useEffect(() => {
		setMovies([]); // Clear movies when filters change
		setPage(1); // Reset page number when filters change
		loadMovies(1);
	}, [minYear, maxYear, genres, title, sort, loadMovies]);

	const handleLoadMore = () => {
		const nextPage = page + 1;
		setPage(nextPage);
		loadMovies(nextPage);
	};

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
			<Button label="Load More.." onClick={handleLoadMore} />
		</div>
	);
};

export default HomePage;
