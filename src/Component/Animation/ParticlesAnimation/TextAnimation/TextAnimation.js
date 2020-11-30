import React from 'react';
import Typical from 'react-typical';
const TextAnimation = () => {
	return (
		<div>
			<Typical
				steps={[
					'Web developer',
					1500,
					'Mern Stack developer',
					1500,
					'Front End developer',
					1500,
				]}
				loop={Infinity}
				wrapper="h1"
			/>
		</div>
	);
};

export default TextAnimation;
