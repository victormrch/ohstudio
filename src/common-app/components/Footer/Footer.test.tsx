import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { getYear } from '../../utils/getYear';
import {
	COPYRIGHT_TEXT,
	LINKEDIN_LINK,
	MAIL_LINK,
	TWITTER_LINK,
} from './Footer.constants';

describe('Footer component', () => {
	it('should render correctly', () => {
		render(<Footer />);

		//Copyright
		const copyrightElement = screen.getByText(COPYRIGHT_TEXT);
		expect(copyrightElement).toBeVisible();

		//Links
		const twitterLink = screen.getByRole('link', { name: 'Twitter' });
		const linkedInLink = screen.getByRole('link', { name: 'LinkedIn' });
		const mailLink = screen.getByRole('link', { name: 'Mail' });

		expect(twitterLink).toHaveAttribute('href', TWITTER_LINK);
		expect(linkedInLink).toHaveAttribute('href', LINKEDIN_LINK);
		expect(mailLink).toHaveAttribute('href', MAIL_LINK);
	});
	it('renders the player component', () => {
		const { container } = render(<Footer />);
		expect(container.querySelector('.player')).toBeInTheDocument();
	});
});
