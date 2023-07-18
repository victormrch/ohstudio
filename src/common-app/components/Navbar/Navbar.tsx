import { useLocation } from 'react-router-dom';

import {
	NavBarContainer,
	NavBarLink,
	NavBarLinkContainer,
	NavBarItemsContainer,
} from './Navbar.style';

import { switchRoutes } from '../../../core/router';

export const Navbar: React.FC = () => {
	const location = useLocation();
	const navLinks = [
		{ label: 'Home', path: switchRoutes.home },
		{ label: 'Profile', path: switchRoutes.profile },
		{ label: 'Contact', path: switchRoutes.contact },
	];
	return (
		<NavBarContainer>
			<NavBarItemsContainer>
				{navLinks.map(navLink => (
					<NavBarLinkContainer
						key={navLink.path}
						active={location.pathname === navLink.path}
					>
						<NavBarLink href={navLink.path}>{navLink.label}</NavBarLink>
					</NavBarLinkContainer>
				))}
			</NavBarItemsContainer>
		</NavBarContainer>
	);
};
