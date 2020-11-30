import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Works.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Works = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
		AOS.refreshHard();
	}, []);
	return (
		<section className="works-section mt-4 pt-4" id="down">
			<div className="word-title my-5 py-5">
				<h2 className="text-center section-title">
					What I <span className="title-sub">do</span>
				</h2>
			</div>
			<div className="row container mx-auto">
				<div className="col-sm-12 col-md-4 col-lg-4 mt-4">
					<div className="card-custom " data-aos="zoom-in-right">
						<div className="card-img">
							<img
								className="img-fluid"
								src="https://i.imgur.com/mhww2BH.png"
								alt=""
							/>
						</div>
						<div className="work-card-title ">
							<h4>Front End Application</h4>
							<p className="text-muted">
								I have 2 years of experience with front end development
								. I try will understand about client demand and i wil
								maintain that .
							</p>
						</div>
						<Link className="text-danger" to="/contact">
							Contact me -
						</Link>
					</div>
				</div>
				<div className="col-sm-12 col-md-4  col-lg-4 mt-4">
					<div className="card-custom" data-aos="zoom-in-left">
						<div className="card-img">
							<img
								className="img-fluid"
								src="https://dotnettrickscloud.blob.core.windows.net/uploads/CourseImages/becomeamernstackdeveloper-mobile.png"
								alt=""
							/>
						</div>
						<div className="card-title">
							<h4>MERN-Stack App.</h4>
							<p className="text-muted">
								I have some experience on full stack on Mern
								applications. I will done some project on Mern
								Technology. Its very interesting for me.
							</p>
						</div>
						<Link className="text-danger" to="/contact">
							Contact me -
						</Link>
					</div>
				</div>
				<div className="col-sm-12 col-md-4  col-lg-4 mt-4">
					<div className="card-custom  " data-aos="zoom-in">
						<div className="card-img">
							<img
								className="img-fluid"
								src="https://www.flaticon.com/premium-icon/icons/svg/1183/1183672.svg"
								alt=""
							/>
						</div>
						<div className="card-title">
							<h4>React Application</h4>
							<p>
								I have experience to build react applications and i have
								completed many react project. I want to build more
								project with my experience{' '}
							</p>
						</div>
						<Link className="text-danger" to="/contact">
							Contact me -
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Works;
