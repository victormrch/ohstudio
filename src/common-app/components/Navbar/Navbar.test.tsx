import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('AppNavbar should render all links correctly', () => {
	it('renders all nav links', () => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>,
		);

		const homeLink = screen.getByText('Home');
		const profileLink = screen.getByText('Profile');
		const contactLink = screen.getByText('Contact');

		expect(homeLink).toBeInTheDocument();
		expect(profileLink).toBeInTheDocument();
		expect(contactLink).toBeInTheDocument();
	});

	test('renders correct link paths', () => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>,
		);

		const homeLink = screen.getByText('Home');
		const profileLink = screen.getByText('Profile');
		const contactLink = screen.getByText('Contact');

		expect(homeLink.getAttribute('href')).toBe('/');
		expect(profileLink.getAttribute('href')).toBe('/profile');
		expect(contactLink.getAttribute('href')).toBe('/contact');
	});
});
