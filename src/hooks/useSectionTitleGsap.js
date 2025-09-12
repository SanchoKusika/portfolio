import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useSectionTitleGsap = (options = {}) => {
	const {
		selector = ".section-title",
		end = "-=50",
		scrub = true,
		markers = false,
	} = options;

	useGSAP(() => {
		const titles = gsap.utils.toArray(selector);
		titles.forEach((title) => {
			gsap.fromTo(
				title,
				{ y: -100, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: title,
						end,
						scrub,
						markers,
					},
				}
			);
		});
	}, [selector, end, scrub, markers]);
};

export default useSectionTitleGsap;
