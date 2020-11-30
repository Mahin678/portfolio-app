import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactForm = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'12341234',
				'template_p534qa9',
				e.target,
				'user_DAlvQxzmjW9kaHyh8q1ZX'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}
	useEffect(() => {
		AOS.init({ duration: 2000 });
		AOS.refreshHard();
	}, []);
	return (
		<div className="">
			<div className="allProject bg-info" id="contact">
				<TopBar />
			</div>
			<div className="row container m-2 py-5  my-5">
				<div
					className="col-sm-12 col-md-6 col-lg-7 mt-4 "
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-out"
				>
					<h2 className="footer-title pl-2 ml-lg-5 section-title ">
						Its Pleasure for <span className="title-sub ">me</span>
					</h2>
					<div className="icon-bar  ml-5 py-2 contact-icon">
						<a href="/https://github.com/Mahin678">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href="/https://www.linkedin.com/in/mahin6/">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a href="/https://www.facebook.com/mahin.tazuar/">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="/https://www.instagram.com/ajaira_432/?hl=en">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
					<p style={{ maxWidth: '500px', margin: '0 auto' }}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
						veritatis odit quis impedit accusamus doloremque? Quibusdam
						dolorum minus iure dolores!
					</p>
				</div>
				<div
					className="col-sm-12 col-md-6 mt-4 col-lg-5"
					data-aos="fade-left"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
				>
					<form className="contact-form" onSubmit={sendEmail}>
						<input
							className="form-control"
							type="hidden"
							name="contact_number"
						/>
						<label>Name</label>
						<input className="form-control" type="text" name="name" />
						<label>Email</label>
						<input className="form-control" type="email" name="email" />
						<label>Message</label>
						<textarea className="form-control" name="message" />
						<input
							style={{ border: '1px solid black', color: 'black' }}
							className="btn custom-btn-header  mt-4 experience-btn"
							type="submit"
							value="Send"
						/>
					</form>
				</div>
			</div>
			<div className="mt-5 pt-4 " id="footer">
				<Footer />
			</div>
		</div>
	);
};

export default ContactForm;
