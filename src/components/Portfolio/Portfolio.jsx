import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import "./style.scss";

import work1 from "../../assets/img/work/1.png";
import work2 from "../../assets/img/work/2.png";
import work3 from "../../assets/img/work/3.png";
import work4 from "../../assets/img/work/4.png";
import work5 from "../../assets/img/work/5.png";
import work6 from "../../assets/img/work/6.png";
import work7 from "../../assets/img/work/7.png";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const Portfolio = () => {
	useGSAP(() => {
		let itemsL = gsap.utils.toArray(".gallery__left .portfolio__item");
		let itemsR = gsap.utils.toArray(".gallery__right .portfolio__item");

		itemsL.forEach((item) => {
			gsap.fromTo(
				item,
				{ x: -80, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: item,
						start: "-=850",
						end: "-=100",
						scrub: true,
					},
				}
			);
		});
		itemsR.forEach((item) => {
			gsap.fromTo(
				item,
				{ x: 80, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: item,
						start: "-=850",
						end: "-=100",
						scrub: true,
					},
				}
			);
		});

		gsap.to(".portfolio", {
			opacity: 0,
			scrollTrigger: {
				trigger: ".portfolio",
				start: "bottom 50%",
				end: "bottom 20%",
				scrub: true,
			},
		});
	}, []);

	return (
		<section id="portfolio" className="portfolio">
			<div className="container">
				<main className="gallery">
					<div className="gallery__left">
						<PortfolioItem
							title="Dacha Côté d'Azur"
							img={work1}
							desc="Website providing stylist services"
							href="https://dachacotedazur.com/"
						/>
						<PortfolioItem
							title="Elegant store"
							img={work2}
							desc="A website that sells headphones"
							href="./projects/elegant/index.html"
						/>
						<PortfolioItem
							title="Unit Project"
							img={work3}
							desc="Website about the Unit app, which helps manage tasks"
							href="./projects/unit/index.html"
						/>
					</div>
					<div className="gallery__right">
						<PortfolioItem
							title="LightSport"
							img={work4}
							desc="Website for selling sports services"
							href="./projects/sport/index.html"
						/>
						<PortfolioItem
							title="Mesto Project"
							img={work5}
							desc="A site for general use. You can create, delete, and like posts"
							href="https://sanchokusika.github.io/mesto-project/"
						/>
						<PortfolioItem
							title="Sushi Shop"
							img={work6}
							desc="Sushi order page with admin panel, order history, and authentication"
							href="./projects/sushi/index.html"
						/>
						<PortfolioItem
							title="BoardNotes"
							img={work7}
							desc="ToDo website with the ability to attach files, authentication, account data configuration, and creation of multi-user sessions"
							href="./projects/board/index.html"
						/>
					</div>
				</main>
			</div>
		</section>
	);
};

export default Portfolio;
