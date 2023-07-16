import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: jest.fn(),
}));

describe('AppNavbar should render all links correctly', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('should render Home link', () => {
		(useLocation as jest.Mock).mockReturnValue({ pathname: '/' });
		render(<Navbar />);
		const homeLink = screen.getByRole('link', {
			name: /home/i,
		});

		expect(homeLink).toBeVisible();
	});
	it('should render Profile link', () => {
		(useLocation as jest.Mock).mockReturnValue({ pathname: '/profile' });
		render(<Navbar />);
		const homeLink = screen.getByRole('link', {
			name: /profile/i,
		});

		expect(homeLink).toBeVisible();
	});
	it('should render Contact link', () => {
		(useLocation as jest.Mock).mockReturnValue({ pathname: '/contact' });
		render(<Navbar />);
		const ContactLink = screen.getByRole('link', {
			name: /contact/i,
		});

		expect(ContactLink).toBeVisible();
	});
});
