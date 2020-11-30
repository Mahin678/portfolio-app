import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-elastic-carousel';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';
const carouselInfo = [
	{
		quote:
			" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
		img: 'https://i.imgur.com/dRZNHIt.png',
		name: 'Araf Karim',
		company: 'Maxsop',
	},
	{
		quote:
			" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
		img: 'https://i.imgur.com/ZKi1BAW.jpg',
		name: 'Jhangkar Mahbub',
		company: 'Programming Hero',
	},
];
const Slider = () => {
	const breakPoints = [
		{ width: 480, itemsToShow: 1 },
		{ width: 768, itemsToShow: 1 },
		{ width: 991, itemsToShow: 1 },
		{ width: 1200, itemsToShow: 1 },
	];
	const imgStyles = {
		height: '334.7px',
		borderRadius: '10px',
		margin: '15px',
	};
	return (
		<div>
			<Carousel
				enableAutoPlay
				autoPlaySpeed={4000}
				breakPoints={breakPoints}
			>
				{carouselInfo.map((info) => (
					<div className="text-center">
						<div className="review-icon">
							<FontAwesomeIcon icon={faQuoteLeft} />
						</div>
						<div className="mx-auto w-100 text-center m-5">
							<img
								className="d-block review-img m-4"
								src={info.img}
								alt="review-img"
							/>
						</div>
						<p className="review-quote"> "{info.quote}"</p>
						<p>
							-{info.name} ,<b>{info.company}</b>
						</p>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Slider;
