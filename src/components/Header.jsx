import PropTypes from 'prop-types';
const Header = ({ title, bgColor, textColor }) => {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyles}>
			<div className='container'>
				<h2>{title}</h2>
			</div>
		</header>
	);
};

// define default props
Header.defaultProps = {
	title: 'Feedback UI',
	bgColor: 'rbga(0,0,0,0.4)',
	textColor: '#FF6A95',
};
//type checking
Header.propTypes = {
	title: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};
export default Header;
