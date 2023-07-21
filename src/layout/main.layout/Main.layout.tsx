import { MainLayoutContainer } from './Main.layout.style';

interface IMainLayoutProps {
	children?: React.ReactNode;
}
export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
	return <MainLayoutContainer>{children}</MainLayoutContainer>;
};
