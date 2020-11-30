import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import './Progress.css';
const Progress = (percentage) => {
	const getPercentage = percentage.percentage;
	return (
		<div>
			<ProgressBar
				width="250px"
				height="5px"
				rect
				fontColor="black"
				percentage={parseInt(percentage.percentage)}
				rectPadding="1px"
				rectBorderRadius="20px"
				trackPathColor="#dddd"
				bgColor="blue"
			/>
		</div>
	);
};

export default Progress;
