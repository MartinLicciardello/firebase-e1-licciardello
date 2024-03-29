import React from 'react';
import './Header.css';

import img from './music-store-logo.png';

import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<div className='header-container'>
			<Link to="/">
			<img src={img} alt='logo' width='150' />
			</Link>
		</div>
	);
};

export default Header;
