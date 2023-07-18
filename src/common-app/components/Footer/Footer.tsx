import { Player } from '@lottiefiles/react-lottie-player';
import {
	FooterContainer,
	FooterLeftContainer,
	FooterLink,
	FooterParagraph,
	FooterRightContainer,
} from './Footer.style';
import {
	COPYRIGHT_TEXT,
	TWITTER_LINK,
	LINKEDIN_LINK,
	MAIL_LINK,
} from './Footer.constants';

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<FooterLeftContainer>
				<Player
					src='https://lottie.host/b530a230-f3cf-404f-92a8-f21e9e62fde3/AszjGPv0E8.json'
					className='player'
					loop
					autoplay
					style={{ height: '30px', width: '30px' }}
				/>
				<FooterLink>{COPYRIGHT_TEXT}</FooterLink>
			</FooterLeftContainer>
			<FooterRightContainer>
				<FooterParagraph>
					<FooterLink href={TWITTER_LINK}>Twitter</FooterLink>
				</FooterParagraph>
				<FooterParagraph>
					<FooterLink href={LINKEDIN_LINK}>LinkedIn</FooterLink>
				</FooterParagraph>
				<FooterParagraph>
					<FooterLink href={MAIL_LINK}>Mail</FooterLink>
				</FooterParagraph>
			</FooterRightContainer>
		</FooterContainer>
	);
};
