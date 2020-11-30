import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const insideStyles = {
	background: 'white',
	padding: 10,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
};
const WorkInfo = [
	{
		category: 'recent',
		title: 'Volunteer Network',
		details:
			' That is a volunteer management application ,volunteers can select tasks and registration with which day he is free . volunteers can see his dashboard and can cancel his service.After clicked admin button , admin going on his dashboard and can add more service ,can be delaite volunteers from the table.',
		technology: ['Html', 'css', 'javascript', 'react js '],
		liveLink: 'https://volunteer-network-main-5680d.web.app/',
		gitClientSideLink: 'https://github.com/Mahin678/volunteer-network-main',
		gitServerSideLink:
			'https://github.com/Mahin678/volunteer-network-main-server',
		img: 'https://i.imgur.com/Z3GbuZf.png',
	},
	{
		category: 'recent',
		title: 'creative agency',
		details:
			'This is an Agency company application with admin and User DashBoard .After Selected	service users can purchase order a service and the user can see that on the dashboard.User can give the review .Admin can take more people to the admin role for maintaining user service and can make more service.',
		technology: ['Html', 'css', 'javascript', 'react js '],
		liveLink: 'https://creative-agency-app-e11f4.web.app/home',
		gitClientSideLink: 'https://github.com/Mahin678/creative-agency-app',
		gitServerSideLink: 'https://github.com/Mahin678/creative-agency-server',
		img: 'https://i.imgur.com/NHs3Sbll.png',
	},
	{
		category: 'recent',
		title: 'Travel Guru',
		details:
			'Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!',
		technology: ['Html', 'css', 'javascript', 'react js '],
		liveLink: 'https://travel-guru-apps.netlify.app/',
		gitClientSideLink: 'https://github.com/Mahin678/travel-guru-app',
		img: 'https://i.imgur.com/mhrAlRvl.png',
	},
	{
		category: 'recent',
		title: 'Disto Personal Blog Clone',
		details:
			'Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!',
		technology: ['Html', 'css', 'javascript', 'react js '],
		liveLink: 'https://disto.netlify.app/',
		img: 'https://i.imgur.com/9FT0n2Ll.png',
	},
	{
		category: 'recent',
		title: 'Hard Rock Music App',
		details:
			'Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!',
		technology: ['Html', 'css', 'javascript', 'react js '],
		liveLink: 'https://mahin678.github.io/hard-rock-music-app-assingment/',
		gitClientSideLink:
			'https://github.com/Mahin678/hard-rock-music-app-assingment',
		img: 'https://i.imgur.com/jiWQjp7.png',
	},
	{
		category: 'recent',
		title: 'Social Buddy',
		details:
			'Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!',
		technology: ['Html', 'css', 'javascript', 'react js '],
		liveLink: 'https://socialbuddys.netlify.app/',
		gitClientSideLink: 'https://github.com/Mahin678/social-user-app',
		img: 'https://i.imgur.com/FtZjref.png',
	},
];
const Experience = (props) => {
	const [project, setProject] = useState('');
	const projectAll = WorkInfo.slice(0, 2);
	useEffect(() => {
		AOS.init({ duration: 2000 });
		AOS.refreshHard();
	}, []);
	return (
		<section className="experience-section my-5 py-5">
			<div className="my-3 py-3">
				<h2 className="text-center section-title my-5 py-5">
					My work of <span className="title-sub ">experience</span>
				</h2>
				<div className="experience-bar  text-center my-4">
					<div className="d-inline-block text-center mx-auto">
						<div className="d-inline-block">
							<NavLink
								className="active"
								activeStyle={{
									fontWeight: 'bold',
									color: 'red',
								}}
								to="/home"
							>
								Recent
							</NavLink>

							<NavLink
								activeStyle={{
									fontWeight: 'bold',
									color: 'red',
								}}
								to="/best"
							>
								Best
							</NavLink>
						</div>
					</div>
				</div>
			</div>
			<div className="experience-description-wrapper container ">
				{props.work.children}
				{props.work.children == undefined &&
					projectAll.map(
						(info, i) =>
							info.category == 'recent' && (
								<div
									data-aos="fade-right"
									className="word-item  skills-wrapper d-xs-block d-lg-flex  justify-content-center "
								>
									<div className="work-img  ">
										<Parallax bgImage={info.img} strength={+200}>
											<div style={{ height: 500 }}></div>
										</Parallax>
									</div>

									<div className="work-feature ">
										<h2 className="mt-2">
											<span>
												{(i < 10) & '0'}
												{i + 1}.
											</span>{' '}
											{info.title}
										</h2>
										<p
											className="infoDetails"
											style={{ maxWidth: '500px' }}
										>
											{info.details}
										</p>
										<div className="mt-5">
											<p className="font-weight-bold text-muted text-uppercase">
												using technology{' '}
											</p>
											{info.technology.map((tech) => (
												<button
													disabled
													className="btn btn-experience-work "
												>
													{tech}
												</button>
											))}
										</div>
										<p className="m-3">
											<div className="allProject-icon icon-bar text-left   py-2">
												<p className="ml-4 d-inline">
													Live Preview
												</p>
												{info.liveLink && (
													<a
														href={info.liveLink}
														className="text-muted"
													>
														<FontAwesomeIcon icon={faGlobe} />
													</a>
												)}
												{info.gitClientSideLink && (
													<a
														href={info.gitClientSideLink}
														className="text-muted"
													>
														<FontAwesomeIcon icon={faGithub} />
													</a>
												)}
											</div>
										</p>
									</div>
								</div>
							)
					)}
			</div>
			<div className="text-center  container mx-auto">
				<Link to="/allProject">
					<button
						style={{ border: '1px solid black', color: 'black' }}
						className=" btn experience-btn custom-btn-header  "
					>
						View More
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Experience;
