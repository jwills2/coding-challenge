import React from 'react';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ProductListing from './';

configure({ adapter: new Adapter() });

it('renders correct content from props', () => {
	const props = {
		name: 'Test product',
		imageUrl: 'https://cdn.mec.ca/medias/sys_master/fallback/fallback/8986611089438/5059964-YBB01-fallback.jpg',
		imageAlt: 'Test product image alt'
	};

	const wrapper = shallow(<ProductListing {...props} />);

	expect(wrapper.find('article').length).toEqual(1);

	expect(wrapper.find('h2').length).toEqual(1);
	expect(wrapper.find('h2').text()).toEqual(props.name);

	expect(wrapper.find('img').length).toEqual(1);
	expect(wrapper.find('img').prop('src')).toEqual(props.imageUrl);
	expect(wrapper.find('img').prop('alt')).toEqual(props.imageAlt);
});