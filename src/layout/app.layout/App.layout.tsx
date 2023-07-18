import { Footer } from '../../common-app/components/Footer';
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
			<Footer />
		</AppLayoutContainer>
	);
};
