// src/components/movies/MovieCard.js
import './movies.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import backupImg from '../../assets/backup.png';
import PropTypes from 'prop-types';


const MovieCard = ({ movie }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isWatchLater, setIsWatchLater] = useState(false);
	const accessToken = localStorage.getItem('accessToken');
	useEffect(() => {
		const fetchUserLists = async () => {
			const config = {
				headers: { Authorization: `Bearer ${accessToken}` }
			};
			try {
				// get faves
				const favoritesResponse = await axios.get('http://localhost:8000/api/titles/favorite/', config);
				setIsFavorite(favoritesResponse.data.some(fav => fav.imdbId === movie.imdbId));
				// get watch later
				const watchLaterResponse = await axios.get('http://localhost:8000/api/titles/watchlater/', config);
				setIsWatchLater(watchLaterResponse.data.some(wl => wl.imdbId === movie.imdbId));
			} catch (error) {
				console.error("couldn't get the lists:", error);
			}
		};
		if (movie.imdbId && accessToken) {
			fetchUserLists();
		}
	}, [movie.imdbId, accessToken]
	);
	const handleClick = async (type) => {
		const config = {
			headers: { Authorization: `Bearer ${accessToken}` }
		};
		const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;
		try {
			// discern the toggle -- post (add) if not already, delete otherwise
			if ((type === 'favorite' && !isFavorite) || (type === 'watchlater' && !isWatchLater)) {
				await axios.post(url, {}, config);
			} else {
				await axios.delete(url, config);
			}
			// and update state
			if (type === 'favorite') {
				setIsFavorite(!isFavorite);
			} else if (type === 'watchlater') {
				setIsWatchLater(!isWatchLater);
			}
		} catch (err) {
			console.error(`sadly, the ${type} list did not update`, err);
		}
	};

	return (
		<li className='card'>
			<div className='card-image-container'>
				<img
					src={movie.imageurls[0] || backupImg}
					alt={movie.title} />
				<div className='card-icons'>
					<FontAwesomeIcon icon={faClock} onClick={() => handleClick('watchlater')} className={isWatchLater ? 'card-fa-icon filled' : 'card-fa-icon'} />
					<FontAwesomeIcon icon={faStar} onClick={() => handleClick('favorite')} className={isFavorite ? 'card-fa-icon filled' : 'card-fa-icon'} />
				</div>
				<div className='title-overlay'>
					{movie.title}
				</div>
			</div>
			<div className='summary-box'>
				<p>
					{movie.synopsis || "Just guess what it's about"}
				</p>
				<div className='genre-bubbles'>
					{movie.genres.map((genre, index) => (
						<span key={index} className='genre-bubble'>{genre}</span>
					))}
				</div>
			</div>
		</li>
	)
}

MovieCard.propTypes = {
	movie: PropTypes.object.isRequired
}

export default MovieCard;