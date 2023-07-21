import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	fontPrimaryColor,
	fontQuaternaryColor,
	fontSecondaryColor,
} from '../../../core/theme/app.style';

export const NavBarContainer = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	margin: 0;
	padding: 0;
	overflow: hidden;
	padding: 0.625rem;
`;

export const NavBarItemsContainer = styled.ul`
	background-color: ${fontQuaternaryColor};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6.25rem;
	backdrop-filter: blur(16px);
	width: 17.063rem;
	padding: 0.25rem;
`;

export const NavBarLinkContainer = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2.5rem;
	width: 5.625rem;
	text-decoration: none;
	font-size: 0.875rem;
	color: ${fontSecondaryColor};

	&.active {
		border-radius: 6.25rem;
		background-color: ${fontPrimaryColor};
		transition: all 0.5s ease;
	}
`;
