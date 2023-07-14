import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { switchRoutes } from './routes';
import { HomeScene } from '../../scenes/home.scene';
import { ProfileScene } from '../../scenes/profile.scene';
import { ContactScene } from '../../scenes/contact.scene';

interface RouterProps {
	children?: React.ReactNode;
}

export const AppRouter: React.FC<RouterProps> = ({ children }) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={switchRoutes.home} element={<HomeScene />} />
				<Route path={switchRoutes.profile} element={<ProfileScene />} />
				<Route path={switchRoutes.contact} element={<ContactScene />} />
			</Routes>
		</BrowserRouter>
	);
};
