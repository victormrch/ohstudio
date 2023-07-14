import { switchRoutes } from '../core/router/routes';
import { Link } from 'react-router-dom';

export const HomeScene: React.FC = () => {
	return (
		<div>
			<h1>Home Scene</h1>
			<Link to={switchRoutes.profile}>Profile</Link>
            <br />
			<Link to={switchRoutes.contact}>Contact</Link>
		</div>
	);
};
