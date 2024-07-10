// src/components/movies/Filter.js

import React from 'react';
import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
	const sortingOptions = ["latest", "oldest", "highestrated", "lowestrated"];
	const genreOptions = ["action", "drama", "comedy", "biography", "romance", "thriller", "war", "history", "sport", "sci-fi", "documentary", "crime", "fantasy"];

	return (
		<div className="filter">
			<SearchBar title={title} setTitle={setTitle} />
			<Input label="Min Year" type="number" value={minYear} setValue={setMinYear} />
			<Input label="Max Year" type="number" value={maxYear} setValue={setMaxYear} />
			<SelectInput label="Sort" options={sortingOptions} value={sort} setValue={setSort} />
			<ul className="genres">
				{genreOptions.map((genre, index) => (
					<Tag key={index} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
				))}
			</ul>
		</div>
	);
};

export default Filter;
