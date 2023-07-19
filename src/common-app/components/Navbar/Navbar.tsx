import {
	NavBarContainer,
	NavBarLinkContainer,
	NavBarItemsContainer,
} from './Navbar.style';

import { switchRoutes } from '../../../core/router';

export const Navbar: React.FC = () => {
	const navLinks = [
		{ label: 'Home', path: switchRoutes.home },
		{ label: 'Profile', path: switchRoutes.profile },
		{ label: 'Contact', path: switchRoutes.contact },
	];
	return (
		<NavBarContainer>
			<NavBarItemsContainer>
				{navLinks.map(navLink => (
					<NavBarLinkContainer key={navLink.path} to={navLink.path}>
						{navLink.label}
					</NavBarLinkContainer>
				))}
			</NavBarItemsContainer>
		</NavBarContainer>
	);
};
