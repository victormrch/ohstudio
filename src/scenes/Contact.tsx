import { switchRoutes } from '../core/router/routes';
import { Link } from 'react-router-dom';

export const ContactScene: React.FC = () => {
	return (
		<div>
			<h1>Contact Scene</h1>
			<Link to={switchRoutes.home}>Home</Link>
            <br />
			<Link to={switchRoutes.profile}>Profile</Link>
		</div>
	);
};
