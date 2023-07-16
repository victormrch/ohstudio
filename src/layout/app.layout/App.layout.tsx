import { Navbar } from '../../common-app/components/Navbar';
import { AppLayoutContainer } from './App.layout.style';

interface IAppLayoutProps {
	children?: React.ReactNode;
}
export const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
	return (
		<AppLayoutContainer>
			<Navbar />
			{children}
		</AppLayoutContainer>
	);
};
