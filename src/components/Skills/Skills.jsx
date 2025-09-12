import Skill from "../Skill/Skill";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./style.scss";
import useSectionTitleGsap from "../../hooks/useSectionTitleGsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
	useSectionTitleGsap({ end: "-=50", scrub: true });
	const wrapperRef = useRef(null);

	useGSAP(() => {
		const wrapper = wrapperRef.current;
		const items = gsap.utils.toArray(".skill__content");

		gsap.set(items, { opacity: 0, y: 20 });

		gsap.to(items, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: "power1.out",
			stagger: { each: 0.12, from: "start" },
			scrollTrigger: {
				trigger: wrapper,
				start: "top 80%",
				end: "top 50%",
				scrub: true,
			},
		});
	}, []);

	return (
		<section id="skills" className="skills">
			<div className="container">
				<h2 className="section-title">Skills & Technologies</h2>
				<div ref={wrapperRef} className="skills__wrapper">
					<Skill img={<FaHtml5 color="#FC490B" />} title="HTML" />
					<Skill
						img={<FaCss3Alt color="#2196F3" />}
						title="CSS(SCSS)"
					/>
					<Skill
						img={<FaJsSquare color="#FFDF00" />}
						title="JavaScript"
					/>
					<Skill img={<FaNodeJs color="#52A044" />} title="Node.js" />
					<Skill img={<FaGulp color="#cf4647" />} title="GULP" />
					<Skill img={<FaGitAlt color="#e34f26" />} title="Git" />
					<Skill img={<FaGithub color="#f0f6fc" />} title="GitHub" />
					<Skill img={<FaReact color="#5ADAFD" />} title="React" />
					<Skill img={<SiPhp color="#777BB3" />} title="PHP" />
				</div>
			</div>
		</section>
	);
};

export default Skills;
