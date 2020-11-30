import React, { useEffect } from 'react';
import HeaderIconBar from '../Home/HeaderIconBar/HeaderIconBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudDownloadAlt,
	faComment,
	faComments,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link as a, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
		AOS.refreshHard();
	}, []);
	return (
		<footer className="bg-dark footer py-5 m-0" id="footer">
			{/* <HeaderIconBar /> */}
			<div id="about-id" className="bg-dark">
				<h2 className="text-center section-title text-light my-5">
					About <span className="title-sub ">me</span>
				</h2>
				<div className="w-100 about-box">
					<div className="footer-me-image text-center">
						<img
							className="rounded-circle img-fluid"
							src="https://i.imgur.com/K55rkktl.jpg"
							alt="Sifat Moonjerin"
						/>
					</div>
					<div className="icon-bar text-center py-2">
						<a href="https://github.com/Mahin678" target="_blank">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href="https://www.linkedin.com/in/mahin6/" target="_blank">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a
							href="https://www.facebook.com/mahin.tazuar/"
							target="_blank"
						>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a
							href="https://www.instagram.com/ajaira_432/?hl=en"
							target="_blank"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
					<div className="footer-details  ">
						<p className="text-light">
							Enthusiastically in real-life contributes my creative,
							standard, and impassioned programming knowledge. Quickly
							learn new things and overcome any kind of problem with
							interest. Explore more deep programming worlds with
							enthusiasm and curiosity.
						</p>
						<div className="text-center p-5">
							<Link className="btn custom-btn-header m-2" to="/contact">
								<FontAwesomeIcon icon={faComments} /> Talk with me
							</Link>
							<a
								href="https://doc-0c-4g-docs.googleusercontent.com/docs/securesc/5p7p8dk81frd3o4pve28qerfe8vkvmsj/dutr9jr54nopdgb75sl60t5cn46diotk/1606695075000/00980563053092502079/00980563053092502079/1HhCy6RUccuYSodrHl2KoVuRH6V1dzTUo?e=download&authuser=0"
								download="true"
								className="btn custom-btn-header m-2"
								style={{ width: '200px' }}
							>
								<FontAwesomeIcon icon={faCloudDownloadAlt} /> Download
								Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
