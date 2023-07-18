import { styled } from 'styled-components';
import {
	fontSecondaryColor,
	fontTerciaryColor,
	tabletBreakPoint,
} from '../../../core/theme/app.style';

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-between;
	font-size: 0.875rem;
	font-weight: 400;
	letter-spacing: 0;
	line-height: 1.2em;
	padding: 2.5rem;
	margin-top: auto;

	@media (max-width: ${tabletBreakPoint}) {
		flex-direction: column;
		align-items: center;
	}
`;

export const FooterLeftContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.625rem;

	@media (max-width: ${tabletBreakPoint}) {
		flex-direction: column;
	}
`;

export const FooterRightContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	text-decoration: none;
`;

export const FooterParagraph = styled.p`
	color: ${fontSecondaryColor};
	:hover {
		color: ${fontTerciaryColor};
	}
`;

export const FooterLink = styled.a`
	text-decoration: none;
	color: ${fontSecondaryColor};
`;
