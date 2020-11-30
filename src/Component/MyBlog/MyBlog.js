import React, { useEffect } from 'react';
import Headroom from 'react-headroom';
import Footer from '../Footer/Footer';
import TopBar from '../TopBar/TopBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MyBlog.css';

const myBlog = [
	{
		time: 'Nov 5 2020',
		title: 'Some Tricky Things of javascript.',
		img: 'https://i.imgur.com/8byIwOq.jpg',
		details:
			"Javascript has some tricky things. Sometimes they are confused us. That's an important need to learn every developer. ",
		tag: 'Javascript',
		link:
			'https://mahintazuar678.medium.com/some-tricky-things-of-javascript-438ede2c05fa',
	},
	{
		time: 'Nov 4 2020',
		title: 'React is not Perfect ?',
		img: 'https://miro.medium.com/max/700/1*yjH3SiDaVWtpBX0g_2q68g.png',
		details:
			'React is the most popular Javascript library. Today I will try to introducing react and something which is relevant to react js. ',
		tag: 'Javascript,React ',
		link:
			'https://mahintazuar678.medium.com/react-is-not-perfect-40e15e84be9b',
	},
	{
		time: 'Nov 3 2020',
		title: ' Javascript Es6',
		img: 'https://miro.medium.com/max/700/1*yjH3SiDaVWtpBX0g_2q68g.png',
		details:
			'Javascript Data types, Object & Function,Expression,try & catch,Cache Storage.Cross Browser Testing and Es6.',
		tag: 'Javascript Es6',
		link:
			'https://mahintazuar678.medium.com/javascript-data-types-object-function-expression-try-catch-cache-storage-cross-ed67af2b3281',
	},
	{
		time: 'Nov 2 2020',
		title: ' Javascript String, Number & Array',
		img: 'https://miro.medium.com/max/640/1*ZFQubQrMREWiMBB_nCXrBw.jpeg',
		details:
			'String, Number, and Array are important things in every programming language.',
		tag: 'Javascript',
		link:
			'https://mahintazuar678.medium.com/javascript-string-number-array-2818bc3df67f',
	},
	{
		time: 'August 18 2020',
		title: 'About the javascript Variable Declaration.',
		img: 'https://miro.medium.com/max/700/0*ok51b2bP1XoBNDbs',
		details:
			'Javascript have 3 different word, which is a reserve for declaring a variable. These 3 types have 3 different meanings.',
		tag: 'Javascript es6',
		link:
			'https://mahintazuar678.medium.com/about-the-javascript-variable-declaration-2d892789a8d6',
	},
	{
		time: 'July 29 2020',
		title: 'About Javascript Starting.',
		img: 'https://miro.medium.com/max/700/0*ok51b2bP1XoBNDbs',
		details:
			'we know js are the most important things for developing software. So we must be needed to know javascript.',
		tag: 'Javascript es6',
		link:
			'https://mahintazuar678.medium.com/about-javascript-starting-ee67e6c708ef',
	},
];
const MyBlog = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
		AOS.refreshHard();
	}, []);
	return (
		<div className="my-blog">
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
			<div className="my-5 all-blog">
				<div
					className="blog-header text-center my-5"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<h2 className="text-center mt-5 mb-4 section-title">
						Welcome in
						<span className="title-sub "> My Blog</span>
					</h2>
					<p className="text-muted text-title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci, tempore. At illo aspernatur soluta ullam, earum sint
						maxime tempora reprehenderit.
					</p>
				</div>
				<div className="container">
					<div className="row">
						{myBlog.map((data, i) => (
							<div className="col-lg-4 my-3">
								<a href={data.link} target="_blank">
									<div
										className="blog-card"
										data-aos="fade-up"
										data-aos-easing="linear"
										data-aos-duration="1500"
									>
										<img
											className="img-fluid blog-item"
											src={data.img}
											alt=""
										/>
										<div className="p-3">
											<h4>{data.title}</h4>
											<p className="text-muted">
												{' '}
												{data.details.substring(0, 120) + '...'}
											</p>
										</div>
										<div
											style={{ backgroundColor: 'rgba(0,0,0,0.1' }}
											className="card-footer d-flex justify-content-between"
										>
											<h6>{data.tag}</h6>
											<h6>{data.time}</h6>
										</div>
									</div>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyBlog;
