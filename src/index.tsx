import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppRouter } from './core/router/Router';
import { GlobalStyle } from './core/theme/app.style';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<AppRouter>
			<App />
		</AppRouter>
	</React.StrictMode>,
);
