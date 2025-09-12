import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__copyright">
					&copy; {new Date().getFullYear()} Aleksandr Kuznetsov.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
