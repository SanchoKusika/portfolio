import "./style.scss";

const Skill = ({ img, title }) => {
	return (
		<div className="skill">
			<div className="skill__content">
				<div className="skill__img">{img}</div>
				<h3 className="skill__title">{title}</h3>
			</div>
		</div>
	);
};

export default Skill;
