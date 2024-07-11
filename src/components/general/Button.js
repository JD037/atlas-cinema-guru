// src/components/general/Button.js
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, className, onClick, icon, type }) => {
	return (
		<button className={className} onClick={onClick} type={type}>
			{icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
			{label}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.object,
	endIcon: PropTypes.object,
};

export default Button;