import "../styles/global.scss";
import { MdClose } from "react-icons/md";

export default function CardDetailPopup(params) {
  const cardData = params.cardData;
  
  return (
    <div className="popup">
      <div className="popupContent">
        <div  className="icon">
            <MdClose className="iconSize" onClick={params.handleClose}/>
        </div>
        <img
          src={cardData.thumbnail.small}
          alt={cardData.title}
          className="image"
        />
        <div className="padding">
          <div className="title">
            <b>{cardData.title}</b>
          </div>
          <p className="content">{cardData.content}</p>
          <div className="footer">
            <img
              src={cardData.author.avatar}
              alt="Avatar"
              className="avatar "
            />
            <p className="content author-content ">
              {cardData.author.name + " - " + cardData.author.role}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
