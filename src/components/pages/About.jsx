import Card from '../shared/Card';
import { Link } from 'react-router-dom';
const About = () => {
	return (
		<Card>
			<div className='about'>
				<h1>About this app</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
					voluptatum?
				</p>
				<p>Version 1.0.0</p>
				<p>
					<Link to='/'>Back To Home</Link>
				</p>
			</div>
		</Card>
	);
};

export default About;
