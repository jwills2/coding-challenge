import React from 'react';
import {configure, mount} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

it('renders correct index page', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={["/"]}>
			<App />
		</MemoryRouter>
	);

	expect(wrapper.find('h1').length).toEqual(1);
	expect(wrapper.find('p').length).toEqual(1);
	expect(wrapper.find('SearchResults').length).toEqual(0);
});

it('renders correct search page', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={["/search/bike"]}>
			<App />
		</MemoryRouter>
	);

	expect(wrapper.find('SearchResults').length).toEqual(1);
});