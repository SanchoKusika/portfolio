import { useTranslation } from "react-i18next";
import "./style.scss";

const PortfolioItem = ({ projectId, img, href }) => {
	const { t } = useTranslation();

	return (
		<div className="text-block portfolio__item">
			<h2 className="text-block__title">
				{t(`projects.${projectId}.title`)}
			</h2>
			<p className="text-block__desc">
				{t(`projects.${projectId}.description`)}
			</p>
			<a href={href} target="_blank">
				<img
					className="portfolio__item"
					src={img}
					alt={t(`projects.${projectId}.title`)}
				/>
			</a>
		</div>
	);
};

export default PortfolioItem;
