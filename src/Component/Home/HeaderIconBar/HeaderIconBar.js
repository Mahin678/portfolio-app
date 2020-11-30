import React from 'react';
import './HeaderIconBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const HeaderIconBar = () => {
	return (
		<div className=" d-flex justify-content-around text-light text-center p-2 bg-color ">
			<div className="d-inline-block text-center ">
				<div className="d-none  d-sm-none d-lg-inline-block ">
					<div className="left-icon-bar">
						<span>My </span>
						<span>
							<span className="iconLeft">
								<FontAwesomeIcon icon={faPhoneSquareAlt} />
							</span>
							+08801712422659
						</span>
						<span className="text-lowercase">
							<span className="iconLeft">
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							mahintazuar678@gmail.com
						</span>
					</div>
				</div>
				<div className="d-inline-block ">
					<div className="icon-bar">
						<a href="https://github.com/Mahin678" target="_blank">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href="https://www.linkedin.com/in/mahin6" target="_blank">
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
				</div>
				<a
					href="https://doc-0c-4g-docs.googleusercontent.com/docs/securesc/5p7p8dk81frd3o4pve28qerfe8vkvmsj/dutr9jr54nopdgb75sl60t5cn46diotk/1606695075000/00980563053092502079/00980563053092502079/1HhCy6RUccuYSodrHl2KoVuRH6V1dzTUo?e=download&authuser=0"
					target="_blank"
					className="btn   custom-btn-header d-none d-sm-inline-block d-lg--inline-block  px-"
				>
					My Cv
				</a>
			</div>
		</div>
	);
};

export default HeaderIconBar;
