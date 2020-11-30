import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';
import TopBar from '../TopBar/TopBar';
import Experience from './Experience/Experience';
import Header from './Header/Header';
import HeaderIconBar from './HeaderIconBar/HeaderIconBar';
import Works from './Works/Works';
import Headroom from 'react-headroom';
import Review from './Review/Review';
const Home = (props) => {
	return (
		<div>
			<div className="bg-nav">
				<HeaderIconBar />
				<Headroom
					style={{
						webkitTransition: 'all .5s ease-in-out',
						mozTransition: 'all .5s ease-in-out',
						oTransition: 'all .5s ease-in-out',
						transition: 'all .5s ease-in-out',
					}}
				>
					<TopBar />
				</Headroom>
			</div>
			<Header />
			<Skills />
			<Works />
			<Experience work={props} />
			<Review />
			<Footer />
		</div>
	);
};

export default Home;
