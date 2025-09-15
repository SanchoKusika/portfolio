import { useTranslation } from "react-i18next";
import "./style.scss";

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__copyright">
					&copy; {new Date().getFullYear()} {t("footer.text")}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
