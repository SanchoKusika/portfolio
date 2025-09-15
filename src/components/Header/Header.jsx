import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./style.scss";

const Header = () => {
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const headerRef = useRef(null);
	const menuButtonRef = useRef(null);
	const { scrollToSection } = useSmoothScroll();

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

	useGSAP(() => {
		if (isMenuOpen) {
			gsap.to(menuRef.current, {
				y: 0,
				duration: 0.8,
				ease: "power4.out",
			});
		} else {
			gsap.to(menuRef.current, {
				y: "-100%",
				duration: 0.8,
				ease: "power4.in",
			});
		}
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleAnchorClick = (e, target) => {
		e.preventDefault();
		closeMenu();
		scrollToSection(target);
	};

	return (
		<header ref={headerRef} className="header">
			<div className="container">
				<div className="header-content">
					<div className="logo">Portfolio</div>

					<nav className="nav-desktop">
						<ul>
							<li>
								<a
									href="#home"
									onClick={(e) =>
										handleAnchorClick(e, "#home")
									}
								>
									{t("header.home")}
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									onClick={(e) =>
										handleAnchorClick(e, "#portfolio")
									}
								>
									{t("header.portfolio")}
								</a>
							</li>
							<li>
								<a
									href="#about"
									onClick={(e) =>
										handleAnchorClick(e, "#about")
									}
								>
									{t("header.about")}
								</a>
							</li>
							<li>
								<a
									href="#skills"
									onClick={(e) =>
										handleAnchorClick(e, "#skills")
									}
								>
									{t("header.skills")}
								</a>
							</li>
							<li>
								<a
									href="#contact"
									onClick={(e) =>
										handleAnchorClick(e, "#contact")
									}
								>
									{t("header.contact")}
								</a>
							</li>
						</ul>
					</nav>

					<div className="header-controls">
						<LanguageSwitcher />
						<button
							ref={menuButtonRef}
							className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
							onClick={toggleMenu}
							aria-label="Toggle menu"
						>
							<span className="hamburger-line"></span>
							<span className="hamburger-line"></span>
							<span className="hamburger-line"></span>
						</button>
					</div>
				</div>
			</div>

			<div
				ref={menuRef}
				className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
			>
				<nav className="nav-mobile">
					<ul>
						<li>
							<a
								href="#home"
								onClick={(e) => handleAnchorClick(e, "#home")}
							>
								{t("header.home")}
								<span></span>
							</a>
						</li>
						<li>
							<a
								href="#portfolio"
								onClick={(e) =>
									handleAnchorClick(e, "#portfolio")
								}
							>
								{t("header.portfolio")}
								<span></span>
							</a>
						</li>
						<li>
							<a
								href="#about"
								onClick={(e) => handleAnchorClick(e, "#about")}
							>
								{t("header.about")}
								<span></span>
							</a>
						</li>
						<li>
							<a
								href="#skills"
								onClick={(e) => handleAnchorClick(e, "#skills")}
							>
								{t("header.skills")}
								<span></span>
							</a>
						</li>
						<li>
							<a
								href="#contact"
								onClick={(e) =>
									handleAnchorClick(e, "#contact")
								}
							>
								{t("header.contact")}
								<span></span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
