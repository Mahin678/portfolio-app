import React from 'react';
import Slider from '../../Animation/Slider/Slider';

const Review = () => {
	return (
		<section className="m-5">
			<div className="text-center my-5">
				<h2 className=" section-title">
					My <span className="title-sub">Mentor's</span>
				</h2>
				<div className="my-4">
					<p className="review-title">
						It is a long established fact that a reader will be of a page
						when established fact looking at its layout.
					</p>
				</div>
			</div>
			<div className="">
				<Slider />
			</div>
		</section>
	);
};

export default Review;
