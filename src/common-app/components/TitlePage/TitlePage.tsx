import { CtaTile, CtaTitleContainer, MainTitle } from './TitlePage.style';

interface ITitlePageProps {
	title: string;
	ctaTitle?: string;
	linkTitle?: string;
}
export const TitlePage: React.FC<ITitlePageProps> = ({
	title,
	ctaTitle,
	linkTitle = '',
}) => {
	return (
		<>
			<MainTitle>{title}</MainTitle>
			{ctaTitle && (
				<CtaTitleContainer style={{ margin: '0' }}>
					<CtaTile href={linkTitle} style={{ textDecoration: 'none' }}>
						{ctaTitle}
					</CtaTile>
				</CtaTitleContainer>
			)}
		</>
	);
};
