import spinner from '../assets/spinner.svg';

const Spinner = () => {
	return (
		<img
			src={spinner}
			alt='loading'
			style={{
				width: '200px',
				height: '200px',
				margin: 'auto',
				display: 'block',
			}}
		/>
	);
};

export default Spinner;
