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
	padding: 1.875rem 2.4rem;
`;

export const NavBarItemsContainer = styled.ul`
	background-color: ${fontQuaternaryColor};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	backdrop-filter: blur(16px);
	width: 273px;
	padding: 4px;
`;

export const NavBarLinkContainer = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 90px;
	text-decoration: none;
	font-size: 14px;
	color: ${fontSecondaryColor};

	&.active {
		border-radius: 100px;
		background-color: ${fontPrimaryColor};
		transition: all 0.5s ease;
	}
`;
