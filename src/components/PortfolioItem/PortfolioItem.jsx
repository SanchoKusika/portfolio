import "./style.scss";

const PortfolioItem = ({ title, img, desc, href }) => {
	return (
		<div className="text-block portfolio__item">
			<h2 className="text-block__title">{title}</h2>
			<p className="text-block__desc">{desc}</p>
			<a href={href} target="_blank">
				<img className="portfolio__item" src={img} alt={title} />
			</a>
		</div>
	);
};

export default PortfolioItem;
