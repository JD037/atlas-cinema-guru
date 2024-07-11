import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';
import PropTypes from 'prop-types';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
	const id = `${label.replace(/\s+/g, '')}`
	const handleInput = (event) => {
		setValue(event.target.value);
	};
	return (
		<div className={`input-container ${className}`}>
			<div className="label-container">
				{icon && <FontAwesomeIcon icon={icon} className="icon-wrapper" />}
				<label htmlFor={id}>{label}:</label>
			</div>
			<input id={id} type={type} value={value} onChange={handleInput} {...inputAttributes} />
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	setValue: PropTypes.func.isRequired,
	icon: PropTypes.element,
	inputAttributes: PropTypes.object
}

export default Input;