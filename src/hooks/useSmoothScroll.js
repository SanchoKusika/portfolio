import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const useSmoothScroll = () => {
	const scrollToSection = (target, offset = 0) => {
		let offsetY = offset;

		if (offset === 0) {
			switch (target) {
				case "#home":
					offsetY = 100;
					break;
				case "#portfolio":
					offsetY = -200;
					break;
				case "#skills":
					offsetY = 100;
					break;
				case "#about":
					offsetY = 100;
					break;
				case "#contact":
					offsetY = 100;
					break;
				default:
					offsetY = 0;
			}
		}

		gsap.to(window, {
			duration: 1.5,
			scrollTo: {
				y: target,
				offsetY: offsetY,
			},
			ease: "power2.inOut",
		});
	};

	return { scrollToSection };
};

export default useSmoothScroll;
