import React from 'react';
import TopBar from '../../../TopBar/TopBar';
import Home from '../../Home';
import Experience from '../Experience';
import { Parallax, Background } from 'react-parallax';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const WorkInfo = [
	{
		category: 'best',
		title: 'Volunteer Network',
		details:
			'Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!',
		technology: ['Html', 'css', 'javascript', 'react js '],
		liveLink: 'https://volunteer-network-main-5680d.web.app/',
		gitClientSideLink: 'https://github.com/Mahin678/volunteer-network-main',
		gitServerSideLink:
			'https://github.com/Mahin678/volunteer-network-main-server',
		img: 'https://i.imgur.com/Z3GbuZf.png',
	},
	{
		category: 'best',
		title: 'creative agency',
		details:
			'Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!',
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
		category: 'best',
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
const Best = () => {
	const bestStyle = {
		topBarStyle: {
			color: 'black !important',
		},
	};
	return (
		<div>
			<Home>
				{WorkInfo.map(
					(info, i) =>
						info.category == 'best' && (
							<div className="word-item  skills-wrapper d-xs-block d-lg-flex  justify-content-center ">
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
										</span>
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
										Live Preview
										{info.liveLink && (
											<a href={info.liveLink} className="text-muted">
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
									</p>
								</div>
							</div>
						)
				)}
			</Home>
		</div>
	);
};

export default Best;
