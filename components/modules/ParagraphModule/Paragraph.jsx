/* styles */
import style from "./Paragraph.scss";

const ParagraphModule = ({ copy }) => {
  console.log(ParagraphModule);
  return (
    <div className={style.text}>
      <p>{copy}</p>
    </div>
  );
};

export default ParagraphModule;
