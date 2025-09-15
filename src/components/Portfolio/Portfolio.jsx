import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();
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
							projectId="dacha"
							img={work1}
							href="https://dachacotedazur.com/"
						/>
						<PortfolioItem
							projectId="elegant"
							img={work2}
							href="./projects/elegant/index.html"
						/>
						<PortfolioItem
							projectId="unit"
							img={work3}
							href="./projects/unit/index.html"
						/>
					</div>
					<div className="gallery__right">
						<PortfolioItem
							projectId="sport"
							img={work4}
							href="./projects/sport/index.html"
						/>
						<PortfolioItem
							projectId="mesto"
							img={work5}
							href="https://sanchokusika.github.io/mesto-project/"
						/>
						<PortfolioItem
							projectId="sushi"
							img={work6}
							href="./projects/sushi/index.html"
						/>
						<PortfolioItem
							projectId="board"
							img={work7}
							href="./projects/board/index.html"
						/>
					</div>
				</main>
			</div>
		</section>
	);
};

export default Portfolio;
