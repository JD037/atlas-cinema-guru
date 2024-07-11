// src/components/general/SelectInput.js
import React from 'react';
import './general.css';
import PropTypes from 'prop-types';

const SelectInput = ({ label, options, className, value, setValue }) => {
	const handleSelect = (event) => {
		setValue(event.target.value);
	};
	return (
		<div className={`select-container ${className}`}>
			<label>{label}:</label>
			<select value={value} onChange={handleSelect}>
				{options.map((option, key) => {
					return <option value={option.value} key={key}>{option.label}</option>
				})}
			</select>
		</div>
	);
}

SelectInput.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	className: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	setValue: PropTypes.func.isRequired,
}

export default SelectInput;