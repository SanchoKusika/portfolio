import "./style.scss";

const Social = ({ img, title, href }) => {
	return (
		<a href={href} className="social">
			<div className="social__content">
				<div className="social__img">{img}</div>
				<h2 className="social__title">{title}</h2>
			</div>
		</a>
	);
};

export default Social;
