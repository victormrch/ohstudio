import { screen, render } from '@testing-library/react';
import { TitlePage } from './TitlePage';

describe('TitlePage Component', () => {
	it('Should render Title correctly without CTATitle', () => {
		const title = 'Title test';
		render(<TitlePage title={title} />);
		expect(screen.getByRole('heading', { name: title })).toBeVisible();
	});
	it('Should render correctly title and CTATitle', () => {
		const title = 'Title test';
		const CTATitle = 'CTATitle test';
		render(<TitlePage title={title} ctaTitle={CTATitle} />);
		expect(screen.getByRole('heading', { name: title })).toBeVisible();
		expect(screen.getByRole('heading', { name: CTATitle })).toBeVisible();
	});
	it('Should render correctly title, CTATitle and linkTitle', () => {
		const title = 'Title test';
		const CTATitle = 'CTATitle test';
		const linkTitle = 'www.test.com';
		render(
			<TitlePage title={title} ctaTitle={CTATitle} linkTitle={linkTitle} />,
		);

		const linkElement = screen.getByRole('link', { name: CTATitle });

		expect(screen.getByRole('heading', { name: title })).toBeVisible();
		expect(screen.getByRole('heading', { name: CTATitle })).toBeVisible();
		expect(linkElement).toHaveAttribute('href', linkTitle);
	});
});
