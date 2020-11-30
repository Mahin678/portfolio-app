import React, { useEffect, useState } from 'react';
import Progress from '../Animation/ParticlesAnimation/ProgressBar/Progress';
import AOS from 'aos';
import 'aos/dist/aos.css';
const skills = [
	{
		expert: [
			{ skill: 'React.js', percentage: '85%' },
			{ skill: 'Javascript', percentage: '80%' },
			{ skill: 'Material UI', percentage: '65%' },
			{ skill: 'Bootstrap', percentage: '65%' },
			{ skill: 'Json API', percentage: '90%' },
			{ skill: 'scss', percentage: '70%' },
		],
	},
	{
		comfortable: [
			{ skill: 'Node js', percentage: '35%' },
			{ skill: 'Express js', percentage: '45%' },
			{ skill: 'MongoDb', percentage: '45%' },
			{ skill: 'React Hook Form', percentage: '90%' },
			{ skill: 'Redux', percentage: '25%' },
		],
	},
	{
		familiars: [
			{ skill: 'Firebase', percentage: '85%' },
			{ skill: 'D3 Chart', percentage: '65%' },
			{ skill: 'Wordpress', percentage: '45%' },
			{ skill: 'Adobe Photoshop', percentage: '45%' },
			{ skill: 'Adobe Illustrator', percentage: '45%' },
		],
	},
];
const Skills = () => {
	const skillData = skills.map((data) => data);
	const { expert } = skillData[0];
	const { comfortable } = skillData[1];
	const { familiars } = skillData[2];

	useEffect(() => {
		AOS.init({ duration: 2000 });
		AOS.refreshHard();
	}, []);

	return (
		<section id="skills">
			<h2 className="text-center my-5 section-title">
				About My <span className="title-sub "> Skills</span>
			</h2>
			<div className="skills-details ">
				<div className=" row container  mx-auto">
					<div className="col-sm-12 col-md-6 col-lg-4 p-4">
						<div className="skills-wrapper" data-aos="fade-right">
							<div className="pt-5 pb-0 px-4 text-uppercase ">
								<h5
									style={{ color: ' darkGrey' }}
									className="title-sub "
								>
									Font End Development
								</h5>
							</div>
							<div className="p-4">
								{expert.map((data) => (
									<div className=" ">
										<div className="progress-title">
											<span className="progress-expert-shape "></span>
											<p>{data.skill}</p>
										</div>
										<Progress percentage={data.percentage} />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 p-4">
						<div className="skills-wrapper" data-aos="fade-up">
							<div className="pt-5 pb-0 px-4 text-uppercase">
								<h5 style={{ color: ' darkGrey' }}>
									Back End Development
								</h5>
							</div>
							<div className="p-4">
								{comfortable.map((data) => (
									<div>
										<div className="progress-title">
											<span className="progress-comfortable-shape"></span>
											<p>{data.skill}</p>
										</div>
										<Progress percentage={data.percentage} />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 p-4">
						<div className="skills-wrapper " data-aos="fade-left">
							<div className="text-uppercase">
								<h5
									style={{ color: ' darkGrey' }}
									className="pt-5 pb-0 px-4 "
								>
									Tools
								</h5>
							</div>
							<div className="pb-4 px-4 pt-3">
								{familiars.map((data) => (
									<div>
										<div className="progress-title">
											<span className="progress-familiars-shape "></span>
											<p>{data.skill}</p>
										</div>
										<Progress percentage={data.percentage} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
