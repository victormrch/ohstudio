import { styled } from 'styled-components';
import {
	tabletBreakPoint,
	desktopBreakPoint,
	fontTerciaryColor,
} from '../../../core/theme/app.style';

export const TitlePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.5rem;
	text-align: center;
`;
export const MainTitle = styled.h1`
	font-size: 4.5rem;
	font-weight: 700;
	line-height: 1.4em;
	letter-spacing: -0.013rem;
	margin: 0;

	@media (max-width: ${desktopBreakPoint}) and (min-width: ${tabletBreakPoint}) {
		font-size: 3rem;
	}
	@media (max-width: ${tabletBreakPoint}) and (min-width: 0) {
		font-size: 2.25rem;
	}
`;

export const CtaTitleContainer = styled.h1`
	font-size: 4.5rem;

	:hover {
		opacity: 50%;
	}

	@media (max-width: ${desktopBreakPoint}) and (min-width: ${tabletBreakPoint}) {
		font-size: 3rem;
	}
	@media (max-width: ${tabletBreakPoint}) and (min-width: 0) {
		font-size: 2.25rem;
	}
`;

export const CtaTile = styled.a`
	color: ${fontTerciaryColor};
	text-decoration: none;
`;
