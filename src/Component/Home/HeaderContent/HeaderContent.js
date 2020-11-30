import React from 'react';
import { Link } from 'react-router-dom';
import TextAnimation from '../../Animation/ParticlesAnimation/TextAnimation/TextAnimation';

const HeaderContent = () => {
	return (
		<div className=" text-light text-left text-sm-center text-md-center text-lg-center  header-content-title my-5">
			<h2>
				I am <span className="title-sub">Mahin Tazuar</span>
			</h2>
			<div style={{ width: '30rem' }}>
				<TextAnimation />
			</div>
			<Link to="/contact" className="btn  custom-btn-header ">
				Hire me
			</Link>
			<div title="" className="outer-limit mt-5">
				<a href="#down">
					<div className=" inner">
						<div className="sign"></div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default HeaderContent;
