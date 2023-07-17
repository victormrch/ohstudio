import { AppRouter } from './core/router';
import { GlobalStyle } from './core/theme/app.style';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<AppRouter />
		</>
	);
};

export default App;
