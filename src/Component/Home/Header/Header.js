import React from 'react';
import ParticlesAnimation from '../../Animation/ParticlesAnimation/ParticlesAnimation';
import TopBar from '../../TopBar/TopBar';
import './Header.css';
import HeaderContent from '../HeaderContent/HeaderContent';
import HeaderIconBar from '../HeaderIconBar/HeaderIconBar';
import Headroom from 'react-headroom';

const Header = () => {
	return (
		<header className="header-wrapper	">
			<div className="header-animation">
				<ParticlesAnimation />
				<div className="header-content pt-5 mt-5">
					<HeaderContent />
				</div>
			</div>
		</header>
	);
};

export default Header;
