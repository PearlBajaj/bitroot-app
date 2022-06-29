import { useEffect, useState } from "react";
import "../styles/global.scss";

export default function ImageCard(params) {
  const cardData = params.cardData;
  const [formattedDate, setFormattedDate] = useState(false);
  useEffect(() => {
    formatDate(cardData.date);
  }, [cardData.date]);
  //Function for formatting the date
  const formatDate = (params) => {
    var options = { year: "numeric", month: "short", day: "numeric" };
    setFormattedDate(
      new Date(params).toLocaleDateString([], options).split(" ")
    );
  };
  return (
    <>
      <div className="grid-item">
        <img
          src={cardData.thumbnail.large}
          alt={cardData.title}
          className="image filter"
        />
        <div className="overlay">
          <p onClick={params.handleClick}>Learn More</p>
        </div>
        <div className="card-content">
          <div className="little-circle-row">
            <div className="little-circle blue"></div>
            <div className="little-circle yellow"></div>
          </div>
          <div className="title title-cursor" onClick={params.handleClick}>
            <b>{cardData.title}</b>
          </div>
          <p className="content">{cardData.content}</p>
          <div className="footer">
            <p className="content">{cardData.author.name}</p>
            <p className="content">
              {formattedDate[0] +
                " " +
                formattedDate[1] +
                ", " +
                formattedDate[2]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
