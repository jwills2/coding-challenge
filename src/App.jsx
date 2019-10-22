import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.scss';

function App() {
	return (
		<React.Fragment>
			<header className="header">
				<div className="header__inner-container">
					<div className="header__logo">Logo</div>
					<SearchBar />
				</div>
			</header>
			<main className="content">
				<Switch>
					<Route path="/search/:searchTerm">
						<SearchResults />
					</Route>
					<Route path="/">
						<h1>MEC Product Search</h1>
						<p className="content__heading-begin">Enter a search term above to begin</p>
					</Route>
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
