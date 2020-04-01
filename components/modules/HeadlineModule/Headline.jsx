/* styles */
import style from "./Headline.scss";

const HeadlineModule = ({ title }) => {
  return <h1 className={style.title}>{title}</h1>;
};

export default HeadlineModule;
