import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './style.scss';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const history = useHistory(); 

	const handleChange = (e) => setSearchTerm(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/search/${searchTerm}`, [searchTerm])
	};

	return (
		<form className="search-bar" onSubmit={handleSubmit} autoComplete="off">
			<input
				className="search-bar__input-field"
				name="searchTerm"
				type="text"
				value={searchTerm}
				onChange={handleChange}
				placeholder="I'm looking for..."
			/>
			<button type="submit" className="search-bar__search-button">
				<SearchIcon className="search-bar__search-icon"/>
			</button>
		</form>
	);
};

export default SearchBar;
