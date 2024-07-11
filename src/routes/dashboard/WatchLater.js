// src/routes/dashboard/WatchLater.js
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard.js';
import Filter from '../../components/movies/Filter.js';
import Button from '../../components/general/Button.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const WatchLater = () => {
	const [movies, setMovies] = useState([]);
	const [minYear, setMinYear] = useState(1970);
	const [maxYear, setMaxYear] = useState(2022);
	const [genres, setGenres] = useState([]);
	const [sort, setSort] = useState("");
	const [title, setTitle] = useState("");
	const [page, setPage] = useState(1);
	const accessToken = localStorage.getItem('accessToken');

	const loadMovies = async (minYear, maxYear, genres, title, sort, page, accessToken, setMovies) => {
		const params = {
			minYear,
			maxYear,
			genre: genres.join(','),
			title,
			sort,
			page,
		};
		try {
			const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
				headers: { Authorization: `Bearer ${accessToken}` },
				params,
			});
			setMovies(prevMovies => [...prevMovies, ...response.data.titles]);
		} catch (error) {
			console.error("Couldn't get movies whoops:", error);
		}
	};

	useEffect(() => {
		loadMovies(minYear, maxYear, genres, title, sort, page, accessToken, setMovies);
	}, [minYear, maxYear, genres, title, sort, page, accessToken]);

	return (
		<div>
			<Filter minYear={minYear} setMinYear={setMinYear} maxYear={maxYear} setMaxYear={setMaxYear} sort={sort} setSort={setSort} genres={genres} setGenres={setGenres} title={title} setTitle={setTitle} />
			<ul className="movies-list">
				{movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
			</ul>
			<Button label="Load More.." className="button" onClick={() => setPage(prevPage => prevPage + 1)} />
		</div>
	);
};

export default WatchLater;
