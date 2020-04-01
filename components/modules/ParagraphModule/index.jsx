/* styles */
import style from "./index.scss";

const ParagraphModule = ({ copy }) => {
  console.log(ParagraphModule);
  return (
    <div className={style.root}>
      <p>{copy}</p>
    </div>
  );
};

export default ParagraphModule;
