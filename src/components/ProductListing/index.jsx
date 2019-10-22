import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ProductListing = ({name, imageUrl, imageAlt}) => (
	<article className="product-listing">
		<img src={imageUrl} className="product-listing__image" alt={imageAlt} />
		<h2 className="product-listing__name">{name}</h2>
	</article>
);

ProductListing.propTypes = {
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired
};

export default ProductListing;
