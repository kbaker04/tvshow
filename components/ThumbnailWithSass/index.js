import "./styles.scss";

const Thumbnail = ({ imageUrl, caption }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} className="thumbnail__image" />
      <h4 className="thumbnail__caption">{caption}</h4>
    </div>
  );
};

export default Thumbnail;
