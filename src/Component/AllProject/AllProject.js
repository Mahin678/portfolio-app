import React, { useEffect } from 'react';
import TopBar from '../TopBar/TopBar';
import './AllProject.css';
import Headroom from 'react-headroom';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';
import { Parallax, Background } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
const mern = [
	{
		category: 'Best',
		title: 'creative agency',
		details:
			'This is an Agency company application with admin and User DashBoard .After Selected	service users can purchase order a service and the user can see that on the dashboard.User can give the review .Admin can take more people to the admin role for maintaining user service and can make more service.',
		technology: [
			'react js ',
			'Node js ',
			'Express js',
			'MongoDB',
			'Img Upload',
			'Firebase',
		],
		liveLink: 'https://creative-agency-app-e11f4.web.app/home',
		gitClientSideLink: 'https://github.com/Mahin678/creative-agency-app',
		gitServerSideLink: 'https://github.com/Mahin678/creative-agency-server',
		img: 'https://i.imgur.com/NHs3Sbll.png',
		time: '17 th October (3 days)',
	},
	{
		category: 'Best',
		title: 'Volunteer Network',
		details:
			' That is a volunteer management application ,volunteers can select tasks and registration with which day he is free . volunteers can see his dashboard and can cancel his service.After clicked admin button , admin going on his dashboard and can add more service ,can be delaite volunteers from the table.',
		technology: [
			'react js ',
			'Node js ',
			'Express js',
			'MongoDB',
			'Img Upload',
			'Firebase',
		],
		liveLink: 'https://volunteer-network-main-5680d.web.app/',
		gitClientSideLink: 'https://github.com/Mahin678/volunteer-network-main',
		gitServerSideLink:
			'https://github.com/Mahin678/volunteer-network-main-server',
		img: 'https://i.imgur.com/Z3GbuZf.png',
		time: '1 th October (3 days)',
	},
	{
		category: 'Practice ',
		title: 'power-x-gym Apps',
		details:
			' This is a Gym Management web application. Client can purchase a service by specific date. This project using by basic Redux, Client can view his previous and all other client which is under  in this Web application . ',
		technology: [
			'react js ',
			'Redux js',
			'Node js ',
			'Express js',
			'MongoDB',
			'Img Upload',
			'Firebase',
			'scss',
		],
		liveLink: 'https://power-gym-x-master.netlify.app/',
		gitClientSideLink: 'https://github.com/Mahin678/power-x-gym/tree/master',
		gitServerSideLink: '',
		img: 'https://i.imgur.com/61Gt6Be.png',
		time: '20 th November (3 days) ',
	},
	{
		category: 'Good',
		title: 'Doctor’s Portal’s ',
		details:
			' This is doctor portals web application , In here many doctor using that application as admin role, doctor can view his patients by specific date . Patient can booking for doctors appointment by specific date . Patient can view his previous appointment by date. we can using more interesting feature if client want',
		technology: [
			'react js ',
			'Node js ',
			'Express js',
			'MongoDB',
			'Img Upload',
			'Firebase',
		],
		liveLink: 'https://e-doctor-portal.netlify.app/',
		gitClientSideLink: 'https://github.com/Mahin678/doctor-portals-app',
		gitServerSideLink: 'https://github.com/Mahin678/doctor-portals-server',
		img: 'https://i.imgur.com/tBaMGum.png',
		time: '28th October (3 days) )',
	},
];
const reactJs = [
	{
		category: 'Good',
		title: 'Travel Guru',
		details:
			'This is a Travel Booking application.User Can book successfully after creating an account on this application ,if this account valid user going for traveling by date and Origin. And see the hotels pricing other facilities for booking.',
		technology: ['react js ', 'Firebase', 'Form Validation , Google map'],
		liveLink: 'https://travel-guru-apps.netlify.app/',
		gitClientSideLink: 'https://github.com/Mahin678/travel-guru-app',
		img: 'https://i.imgur.com/mhrAlRvl.png',
		time: ' 3 days',
	},
	{
		category: 'Practice',
		title: 'Social Buddy',
		details:
			'This is Simple social Buddy web application. Mainly this was build  for practice purpose and we use json Holder API.We use react hook for load Api , I use Material UI for shining desgin',
		technology: ['react js ', 'Json APi', 'Material UI,React Router '],
		liveLink: 'https://socialbuddys.netlify.app/',
		gitClientSideLink: 'https://github.com/Mahin678/social-user-app',
		img: 'https://i.imgur.com/FtZjref.png',
		time: ' 2 days',
	},

	{
		category: 'Practice',
		title: 'Authena Desing',
		details:
			'This is using For scss practiceing and more efficiently Responsive Practicing , Its i am easily doing that successfully ',
		technology: ['react js ', 'Scss'],
		liveLink: 'https://athena-design-app.netlify.app/',
		gitClientSideLink: 'https://github.com/Mahin678/athena-design',
		img: 'https://i.imgur.com/0HR7fRX.png',
		time: '15 November 2020 (2 days)',
	},
];
const vanilaJavascritp = [
	{
		category: 'Best',
		title: 'Hard Rock Music App',
		details:
			'Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!',
		technology: ['Html', 'css', 'Vanila javascript', 'External Music API '],
		liveLink: 'https://mahin678.github.io/hard-rock-music-app-assingment/',
		gitClientSideLink:
			'https://github.com/Mahin678/hard-rock-music-app-assingment',
		img: 'https://i.imgur.com/jiWQjp7.png',
		time: ' 2 days',
	},
	{
		category: 'Good',
		title: 'Temperature Update Application',
		details:
			'This is Simple blog website with fully responsiveness . This website have many	Section with plugins. That represents cross platform Response.',
		technology: [
			'Html',
			'css',
			'javascript',
			'Expernal Temperature Update APi ',
		],
		liveLink: 'https://mahin678.github.io/temperature-update-app/',
		gitClientSideLink: 'https://github.com/Mahin678/temperature-update-app',
		img: 'https://i.imgur.com/lgGZ1WD.png',
		time: ' 1 days',
	},
	{
		category: 'Simple',
		title: 'Javascript Pin Matcher Game',
		details:
			'This is Simple blog website with fully responsiveness . This website have many	Section with plugins. That represents cross platform Response.',
		technology: ['Html', 'css', 'Vanila javascript'],
		liveLink: 'https://mahin678.github.io/pin-matcher-assingment/',
		gitClientSideLink: 'https://github.com/Mahin678/pin-matcher-assingment',
		img: 'https://i.imgur.com/uWCHVwf.png',
		time: ' 2 days',
	},
	{
		category: 'Practice',
		title: 'Disto Personal Blog Clone',
		details:
			'This is Simple blog website with fully responsiveness . This website have many	Section with plugins. That represents cross platform Response.',
		technology: ['Html', 'css', 'Javascript and Jquary Plugin'],
		liveLink: 'https://disto.netlify.app/',
		img: 'https://i.imgur.com/9FT0n2Ll.png',
		time: ' 2 days',
	},
];
const insideStyles = {
	background: 'transparent',
	border: '2px solid darkgrey',
	padding: 20,
	position: 'absolute',
	top: '35%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
};
const AllProject = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
		AOS.refreshHard();
	}, []);
	return (
		<section className="allProject ">
			<div className="allProject bg-info">
				<Headroom
					style={{
						webkitTransition: 'all .5s ease-in-out',
						mozTransition: 'all .5s ease-in-out',
						oTransition: 'all .5s ease-in-out',
						transition: 'all .5s ease-in-out',
					}}
				>
					<TopBar bgColor={'bg-info'} />
				</Headroom>
			</div>
			<div className="welCome-allProject m-5 mt-5 mx-auto text-center ">
				<h2 className="text-center mt-5 mb-4 section-title">
					Welcome in the
					<span className="title-sub "> work project</span>
				</h2>
				<p
					style={{
						maxWidth: '500px',
						margin: ' 0 auto',
						textAlign: ' center',
					}}
				>
					I have 2 years Experience on web development .In this time will
					build many excellent project .I will try to maintain standard
					coding style.i will try to follow fully responsiveness.
				</p>
				<a
					style={{ border: '1px solid black', color: 'black' }}
					target="_blank"
					className="btn experience-btn  custom-btn-header    m-4"
				>
					Let's go
				</a>
				<h4 className="mt-5 mern-title">MERN Stack Project</h4>
			</div>
			<div className="container my-5 py-5 ">
				<div className="row">
					{mern.map((info, i) => (
						<div className="col-sm-12 col-md-6 col-lg-6">
							<div className="row  container-fluid" id="project">
								<div className="col-lg-12 align-self-center  ">
									<h4 className="m-2 w-100 bg-transparent text-center">
										<span className="title-sub ">
											{(i < 10) & '0'}
											{i + 1}.
										</span>
										{info.title}
									</h4>
								</div>
								<div className="col-lg-12">
									<div className="word-item allProject-details   d-xs-block w-100  justify-content-center ">
										<div
											data-aos="zoom-in"
											data-aos-easing="ease-out-cubic"
											data-aos-duration="2000"
											className="work-img  allProject-details-img"
										>
											{/* <img className="w-100" src={info.img} alt="" /> */}

											<Parallax
												bgImage={info.img}
												strength={10}
												renderLayer={(percentage) => (
													<div
														style={{
															position: 'absolute',
															background: `rgba(15, 94, 156, ${
																percentage * 1
															})`,
															left: '50%',
															top: '35%',
															borderRadius: '50%',
															transform: 'translate(-50%,-50%)',
															width: percentage * 200,
															height: percentage * 200,
														}}
													/>
												)}
											>
												<div style={{ height: 500 }}>
													<a
														href={info.liveLink}
														target="_blank"
														style={{
															textDecoration: 'none',
															color: 'white',
														}}
													>
														<div style={insideStyles}>
															View Project
														</div>
													</a>
												</div>
											</Parallax>
										</div>
										<div
											data-aos="fade-down"
											data-aos-easing="linear"
											data-aos-duration="1500"
											className="work-feature p-4 w-100 skills-wrapper"
										>
											<button className="btn btn-danger btn-sm">
												{info.category}
											</button>
											<p className="text-muted font-weight-bold">
												project summary :
											</p>
											<p
												className="infoDetails"
												style={{ maxWidth: '500px' }}
											>
												{info.details}
											</p>
											<div className="mt-2">
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
											<p className="m-1">
												<div className="allProject-icon icon-bar text-left   py-2">
													<p className="ml-4 d-inline">
														Live Preview
													</p>

													{info.liveLink && (
														<a
															href={info.liveLink}
															target="_blank"
															className="text-muted"
														>
															<FontAwesomeIcon icon={faGlobe} />
														</a>
													)}
													{info.gitClientSideLink && (
														<a
															href={info.gitClientSideLink}
															target="_blank"
															className="text-muted"
														>
															<FontAwesomeIcon icon={faGithub} />
														</a>
													)}
													{info.gitServerSideLink && (
														<a
															href={info.gitServerSideLink}
															target="_blank"
															className="text-muted"
														>
															<FontAwesomeIcon icon={faGithub} />
														</a>
													)}
												</div>
											</p>
											<p>Time : {info.time}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<h4 className="text-center mern-title  my-5">React Project </h4>
				<div className="react-project-wrapper">
					<div className="row">
						{reactJs.map((info, i) => (
							<div className="col-sm-12 col-md-6 col-lg-6">
								<div className="row  container-fluid" id="project">
									<div className="col-lg-12 align-self-center  ">
										<h4 className="m-2 w-100 bg-transparent text-center">
											<span className="title-sub ">
												{(i < 10) & '0'}
												{i + 1}.
											</span>
											{info.title}
										</h4>
									</div>
									<div className="col-lg-12">
										<div className="word-item allProject-details   d-xs-block w-100  justify-content-center ">
											<div
												data-aos="zoom-in"
												data-aos-easing="ease-out-cubic"
												data-aos-duration="2000"
												className="work-img  allProject-details-img"
											>
												{/* <img className="w-100" src={info.img} alt="" /> */}

												<Parallax
													bgImage={info.img}
													blur={{ min: -1, max: 3 }}
												>
													<div style={{ height: 500 }}>
														<a
															href={info.liveLink}
															target="_blank"
															style={{
																textDecoration: 'none',
																color: 'darkgrey',
																fontWeight: 'blod',
															}}
														>
															<div style={insideStyles}>
																View Project
															</div>
														</a>
													</div>
												</Parallax>
											</div>
											<div
												data-aos="fade-down"
												data-aos-easing="linear"
												data-aos-duration="1500"
												className="work-feature p-4 w-100 skills-wrapper"
											>
												<button className="btn btn-danger btn-sm">
													{info.category}
												</button>
												<p className="text-muted font-weight-bold">
													project summary :
												</p>
												<p
													className="infoDetails"
													style={{ maxWidth: '500px' }}
												>
													{info.details}
												</p>
												<div className="mt-2">
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
												<p className="m-1">
													<div className="allProject-icon icon-bar text-left   py-2">
														<p className="ml-4 d-inline">
															Live Preview
														</p>

														{info.liveLink && (
															<a
																href={info.liveLink}
																target="_blank"
																className="text-muted"
															>
																<FontAwesomeIcon
																	icon={faGlobe}
																/>
															</a>
														)}
														{info.gitClientSideLink && (
															<a
																target="_blank"
																href={info.gitClientSideLink}
																className="text-muted"
															>
																<FontAwesomeIcon
																	icon={faGithub}
																/>
															</a>
														)}
													</div>
												</p>
												<p>Time : {info.time}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<h4 className="text-center vanila-title  my-5">
					Vanilla Javascript Project
				</h4>
				<div className="vanilaJavascritp-wrapper">
					<div className="row">
						{vanilaJavascritp.map((info, i) => (
							<div className="col-sm-12 col-md-6 col-lg-6">
								<div className="row  container-fluid" id="project">
									<div className="col-lg-12 align-self-center  ">
										<h4 className="m-2 w-100 bg-transparent text-center">
											<span className="title-sub ">
												{(i < 10) & '0'}
												{i + 1}.
											</span>
											{info.title}
										</h4>
									</div>
									<div className="col-lg-12">
										<div className="word-item allProject-details   d-xs-block w-100  justify-content-center ">
											<div
												data-aos="zoom-in"
												data-aos-easing="ease-out-cubic"
												data-aos-duration="2000"
												className="work-img  allProject-details-img"
											>
												{/* <img className="w-100" src={info.img} alt="" /> */}

												<Parallax
													bgImage={info.img}
													blur={{ min: -1, max: 3 }}
												>
													<div style={{ height: 500 }}>
														<a
															href={info.liveLink}
															target="_blank"
															style={{
																textDecoration: 'none',
																color: 'darkgrey',
																fontWeight: 'blod',
															}}
														>
															<div style={insideStyles}>
																View Project
															</div>
														</a>
													</div>
												</Parallax>
											</div>
											<div
												data-aos="fade-down"
												data-aos-easing="linear"
												data-aos-duration="1500"
												className="work-feature p-4 w-100 skills-wrapper"
											>
												<button className="btn btn-danger btn-sm">
													{info.category}
												</button>
												<p className="text-muted font-weight-bold">
													project summary :
												</p>
												<p
													className="infoDetails"
													style={{ maxWidth: '500px' }}
												>
													{info.details}
												</p>
												<div className="mt-2">
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
												<p className="m-1">
													<div className="allProject-icon icon-bar text-left   py-2">
														<p className="ml-4 d-inline">
															Live Preview
														</p>

														{info.liveLink && (
															<a
																href={info.liveLink}
																target="_blank"
																className="text-muted"
															>
																<FontAwesomeIcon
																	icon={faGlobe}
																/>
															</a>
														)}
														{info.gitClientSideLink && (
															<a
																href={info.gitClientSideLink}
																className="text-muted"
															>
																<FontAwesomeIcon
																	icon={faGithub}
																/>
															</a>
														)}
													</div>
												</p>
												<p>Time : {info.time}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default AllProject;
