import style from "./index.scss";

const ImageModule = ({ image }) => {
  return (
    <div>
      <img className="img" src={image} />
    </div>
  );
};

export default ImageModule;
