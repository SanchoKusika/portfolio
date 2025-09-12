import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useSectionTitleGsap from "../../hooks/useSectionTitleGsap";
import "./style.scss";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
	useSectionTitleGsap({ end: "-=50", scrub: true });
	useGSAP(() => {
		document.fonts.ready.then(() => {
			let splitItems = gsap.utils.toArray(".about__desc .split");
			splitItems.forEach((item) => {
				let split = SplitText.create(item, { type: "words, lines" });
				gsap.from(split.lines, {
					y: 10,
					autoAlpha: 0,
					stagger: {
						amount: 0.5,
						from: "start",
					},
					scrollTrigger: {
						trigger: item,
						start: "top 100%",
						end: "top 80%",
						scrub: true,
					},
				});
			});
		});
	}, []);
	return (
		<section id="about" className="about">
			<div className="container">
				<h2 className="section-title">About Me</h2>
				<div className="about__desc">
					<p className="split">
						I’m a frontend developer who truly loves web development
						and everything related to it. I enjoy turning ideas and
						mockups into user-friendly, intuitive pages: from
						thoughtful structure and clean layout to the small
						interface details that make interactions enjoyable 💻 ✨
					</p>
					<p className="split">
						I pay close attention to performance and accessibility —
						I believe a website should load quickly and be
						comfortable for as many people as possible. In my work,
						I value clean, understandable, and maintainable code: it
						saves time in the future and makes projects easier to
						grow. I love collaborating with designers and clients,
						discussing flows and interface behavior, testing
						solutions, and refining them to a stable state ⚡🤝
					</p>
					<p className="split">
						Getting feedback from users and seeing that the website
						truly solves their problem is the most rewarding result
						for me 📊🙌
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
