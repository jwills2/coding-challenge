import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import './App.scss';

function App() {
	return (
		<Switch>
			<Route path="/search/:searchTerm">
				<Header />
				<main className="content">
					<SearchResults />
				</main>
			</Route>
			<Route path="/">
				<Header />
				<main className="content">
					<h1>MEC Product Search</h1>
					<p className="content__heading-begin">Enter a search term above to begin</p>
				</main>
			</Route>
		</Switch>
	);
}

export default App;
