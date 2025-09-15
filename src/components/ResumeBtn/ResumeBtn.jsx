import "./style.scss";

const ResumeBtn = ({ title, img }) => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "./resume/resume.pdf";
		link.download = "Aleksandr_Kuznetsov_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button className="resume" onClick={handleDownload}>
			<h2 className="resume__title">{title}</h2>
			<div className="resume__img">{img}</div>
		</button>
	);
};

export default ResumeBtn;
