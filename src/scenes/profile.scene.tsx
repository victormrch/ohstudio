import { switchRoutes } from '../core/router/routes';
import { Link } from 'react-router-dom';

export const ProfileScene: React.FC = () => {
	return (
		<div>
			<h1>Profile Scene</h1>
			<Link to={switchRoutes.home}>Home</Link>
			<br />
			<Link to={switchRoutes.contact}>Contact</Link>
		</div>
	);
};
