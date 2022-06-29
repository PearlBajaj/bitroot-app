import { useEffect, useState } from "react";
import "./App.scss";
import CardDetailPopup from "./component/cardDetailPopup";
import ImageCard from "./component/imageCard";
import SkeletonLoader from "./component/skeletonLoader";

export default function App() {
  const [cardItems, setCardItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    _getData();
  }, []);

  //function to get data from api endpoint
  const _getData = () => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((res) => res.json())
      .then((result) => {
        setCardItems(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //function to close popup
  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="App">
      <div className="grid">
        {loading ? (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : cardItems && cardItems.length > 0 ? (
          cardItems.map((item, index) => {
            return (
              <ImageCard
                key={index}
                cardData={item}
                handleClick={() => {
                  setSelectedCard(item);
                }}
              />
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      {selectedCard ? (
        <CardDetailPopup cardData={selectedCard} handleClose={handleClose} />
      ) : (
        ""
      )}
    </div>
  );
}
