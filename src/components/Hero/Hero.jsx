import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import heroImg from "../../assets/img/hero.png";
import "./style.scss";

const Hero = () => {
	useGSAP(() => {
		gsap.fromTo(
			".hero-section",
			{ opacity: 1 },
			{
				opacity: 0,
				scrollTrigger: {
					trigger: ".hero-section",
					start: "center",
					end: "820",
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<section id="home" className="hero-section">
			<img data-speed=".6" className="hero" src={heroImg} alt="Hero" />
			<div className="container">
				<div data-speed=".75" className="hero-header">
					<h1 className="hero-title">Aleksandr Kuznetsov</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;
