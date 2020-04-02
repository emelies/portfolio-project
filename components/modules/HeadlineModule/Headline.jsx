/* styles */
import style from "./Headline.scss";


const HeadlineModule = ({ title }) => {
  return <p className={style.title}>{title}</p>;
};

export default HeadlineModule;
