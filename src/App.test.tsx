import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello React heading', () => {
	render(<App />);
	const headingElement = screen.getByRole('heading', { name: 'Hello React!' });
	expect(headingElement).toBeInTheDocument();
});
