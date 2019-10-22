import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar';
import './style.scss';

function Header() {
	return (
		<header className="header">
			<div className="header__inner-container">
				<Link to="/" className="header__logo">Logo</Link>
				<SearchBar />
			</div>
		</header>
	);
}

export default Header;
