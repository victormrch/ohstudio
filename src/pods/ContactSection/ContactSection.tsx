import { MAIL_LINK } from '../../common-app/components/Footer/Footer.constants';
import { TitlePage } from '../../common-app/components/TitlePage';
import { MainLayout } from '../../layout';
import { CONTACT_TITLE, CTA_TITLE } from './ContactSection.constants';

export const ContactSection: React.FC = () => {
	return (
		<MainLayout>
			<TitlePage
				title={CONTACT_TITLE}
				ctaTitle={CTA_TITLE}
				linkTitle={MAIL_LINK}
			/>
		</MainLayout>
	);
};
