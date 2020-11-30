import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudDownloadAlt,
	faComment,
	faComments,
	faEllipsisV,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const TopBar = (props) => {
	const history = useHistory();
	const handleNavigation = () => {
		history.replace('home');
	};
	return (
		<div>
			<nav
				className={`navbar navbar-expand-lg nav-sm-bg-color ${props.bgColor}`}
			>
				<div className="container">
					<NavLink className="navbar-brand text-light" to="/home">
						<img
							style={{ height: '40px' }}
							src="https://i.imgur.com/sFQjiNA.png"
							alt=""
						/>
						Mahin
					</NavLink>
					<button
						className="navbar-toggler text-light"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<FontAwesomeIcon icon={faEllipsisV} />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active mx-4 ">
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										borderBottom: '1px solid white',
										textShadow: 'slategrey',
									}}
									style={props.color}
									className="nav-link"
									to="/home"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item active mx-4">
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										borderBottom: '1px solid white',
										textShadow: 'slategrey',
									}}
									className="nav-link"
									to="/allProject"
								>
									work
								</NavLink>
							</li>
							<li className="nav-item active mx-4 ">
								<a
									activeStyle={{
										fontWeight: 'bold',
										borderBottom: '1px solid white',
										textShadow: 'slategrey',
									}}
									className="nav-link"
									href="#footer"
								>
									about
								</a>
							</li>
							<li className="nav-item active mx-4 ">
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										borderBottom: '1px solid white',
										textShadow: 'slategrey',
									}}
									className="nav-link"
									to="/blog"
								>
									Blog
								</NavLink>
							</li>
							<li className="nav-item active mx-4">
								<NavLink
									activeStyle={{
										fontWeight: 'bold',
										borderBottom: '1px solid white',
										textShadow: 'slategrey',
									}}
									className="nav-link"
									to="/contact"
								>
									contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default TopBar;
