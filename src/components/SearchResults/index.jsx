import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductListing from '../ProductListing';
import './style.scss';

/*
	Chrome was blocking the request to the MEC api endpoint as it does not
	provide the 'Access-Control-Allow-Origin' header. I am bypassing the
	issue by using this CORS proxy
*/
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const MEC_API = 'http://www.mec.ca/api/v1/products/search?keywords=';

function SearchResults(props) {
	const [products, setProducts] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [errorOccured, setErrorOccured] = useState(false);

	const {searchTerm} = useParams();
	useEffect(() => {
		const fetchProducts = async () => {
			setIsFetching(true);

			try {
				setErrorOccured(false);
				const rawData = await fetch(`${CORS_PROXY}${MEC_API}${searchTerm}`);
				const jsonData = await rawData.json();
				setProducts(jsonData.products || []);
				setIsFetching(false);
			} catch (error) {
				setErrorOccured(true);
				setIsFetching(false);
				console.error(error);
			}
		}

		fetchProducts();
	}, [searchTerm]);

	const productList = products.map((product) => (
		<ProductListing
			key={product.product_code}
			name={product.full_name}
			imageUrl={product.default_image_urls.main_image_url}
			imageAlt={product.name}
		/>
	));

	if(isFetching) {
		return <p>Searching for "{searchTerm}"...</p>;
	} else if (errorOccured) {
		return <p>An error occured when searching for "{searchTerm}"</p>
	} else {
		return (
			<React.Fragment>
				<h1>Search results for "{searchTerm}"</h1>
				<p>{productList.length} products found</p>
				{
					productList.length ? (
						<section className="search-results__product-list">{productList}</section>
					) : <p>No products found</p>
				}
			</React.Fragment>
		)
	}
};

export default SearchResults;
