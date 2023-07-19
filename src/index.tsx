import ReactDOM from 'react-dom/client';

import './index.css';

import { GlobalStyle } from './core/theme/app.style';
import { AppRouter } from './core/router';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyle />
		<AppRouter>
			<App />
		</AppRouter>
	</>,
);
