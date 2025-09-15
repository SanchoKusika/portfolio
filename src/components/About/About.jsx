import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useSectionTitleGsap from "../../hooks/useSectionTitleGsap";
import { useTranslation } from "react-i18next";
import "./style.scss";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
	const { t } = useTranslation();
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
				<h2 className="section-title">{t("about.title")}</h2>
				<div className="about__desc">
					<p className="split">
						{t("about.description1")}
					</p>
					<p className="split">
						{t("about.description2")}
					</p>
					<p className="split">
						{t("about.description3")}
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;