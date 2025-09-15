import Social from "../Social/Social";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSectionTitleGsap from "../../hooks/useSectionTitleGsap";
import "./style.scss";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
	const { t } = useTranslation();
	useSectionTitleGsap({ end: "-=50", scrub: false });
	const wrapperRef = useRef(null);
	useGSAP(() => {
		const wrapper = wrapperRef.current;
		const items = gsap.utils.toArray(".social__content");

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
				scrub: false,
			},
		});
	}, []);
	return (
		<section id="contact" className="contact">
			<div className="container">
				<h2 className="section-title">{t("contact.title")}</h2>
				<div ref={wrapperRef} className="contact__wrapper">
					<Social
						type="email"
						img={<MdEmail color="#ffb703" />}
						title="Email"
						href="mailto:sanchezzkusika@gmail.com"
					/>
					<Social
						type="telegram"
						img={<FaTelegram color="#26a5e4" />}
						title="Telegram"
						href="https://t.me/Kusika"
					/>
					<Social
						type="whatsapp"
						img={<IoLogoWhatsapp color="#25D366" />}
						title="WhatsApp"
						href="https://wa.me/+998935763410"
					/>
					<Social
						type="instagram"
						img={<FaInstagram color="#E1306C" />}
						title="Instagram"
						href="https://www.instagram.com/sanchokusika/"
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
