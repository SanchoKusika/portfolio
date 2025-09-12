import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin);

import GradientBg from "./components/GradientBg/GradientBg";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
	useGSAP(() => {
		ScrollSmoother.create({
			wrapper: ".wrapper",
			content: ".content",
			smooth: 1.5,
			effects: true,
		});
	}, []);

	return (
		<div className="wrapper">
			<GradientBg />
			<Header />
			<div className="content">
				<Hero />
				<Portfolio />
				<About />
				<Skills />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
