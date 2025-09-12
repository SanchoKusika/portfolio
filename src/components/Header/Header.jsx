import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import "./style.scss";

const Header = () => {
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
									Home
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									onClick={(e) =>
										handleAnchorClick(e, "#portfolio")
									}
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#about"
									onClick={(e) =>
										handleAnchorClick(e, "#about")
									}
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#skills"
									onClick={(e) =>
										handleAnchorClick(e, "#skills")
									}
								>
									Skills
								</a>
							</li>
							<li>
								<a
									href="#contact"
									onClick={(e) =>
										handleAnchorClick(e, "#contact")
									}
								>
									Contact
								</a>
							</li>
						</ul>
					</nav>

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
								Home
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
								Portfolio
								<span></span>
							</a>
						</li>
						<li>
							<a
								href="#about"
								onClick={(e) => handleAnchorClick(e, "#about")}
							>
								About
								<span></span>
							</a>
						</li>
						<li>
							<a
								href="#skills"
								onClick={(e) => handleAnchorClick(e, "#skills")}
							>
								Skills
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
								Contact
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
