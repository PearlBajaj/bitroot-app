import { useEffect, useState } from "react";
import "./App.scss";
import CardDetailPopup from "./component/cardDetailPopup";
import ImageCard from "./component/imageCard";

export default function App() {
  const [cardItems, setCardItems] = useState([]);
  const [selectedCard,setSelectedCard] = useState(null)

  useEffect(() => {
    _getData()
  }, []);

  //function to get data from api endpoint
  const _getData = () => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((res) => res.json())
      .then((result) => {
        setCardItems(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //function to close popup
  const handleClose = () => {
    setSelectedCard(null)
  }

  return (
    <div className="App">
      <div className="grid">
        {cardItems.map((item, index) => {
          return <ImageCard key={index} cardData={item} handleClick={()=>{
            setSelectedCard(item)
          }} />;
        })}
      </div>
       {selectedCard ? <CardDetailPopup cardData={selectedCard} handleClose={handleClose} /> : ""}
    </div>
  );
}
