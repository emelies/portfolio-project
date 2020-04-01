import style from "./Image.scss";

const ImageModule = ({ image }) => {
  return (
    <div className={style.container}>
      <img src={image} />
    </div>
  );
};

export default ImageModule;
