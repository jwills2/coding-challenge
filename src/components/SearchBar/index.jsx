import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './style.scss';

const SearchBar = () => {
	const {searchTerm} = useParams();
	const [inputSearchTerm, setInputSearchTerm] = useState('');
	const history = useHistory(); 

	const handleChange = (e) => setInputSearchTerm(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if(inputSearchTerm && inputSearchTerm !== searchTerm){
			history.push(`/search/${inputSearchTerm}`, [inputSearchTerm])
		}
	};

	return (
		<form className="search-bar" onSubmit={handleSubmit} autoComplete="off">
			<input
				className="search-bar__input-field"
				name="searchTerm"
				type="search"
				value={inputSearchTerm}
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
