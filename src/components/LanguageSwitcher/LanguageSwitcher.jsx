import { useTranslation } from "react-i18next";
import "./style.scss";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "en" ? "ru" : "en";
		i18n.changeLanguage(newLang);
	};

	return (
		<button
			className="language-switcher"
			onClick={toggleLanguage}
			aria-label="Toggle language"
		>
			<span className={i18n.language === "en" ? "active" : ""}>EN</span>
			<span className="divider">|</span>
			<span className={i18n.language === "ru" ? "active" : ""}>РУ</span>
		</button>
	);
};

export default LanguageSwitcher;
