import React, { useEffect, useState } from "react";
import CardComp from "../ui/CardComp";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";

function MainPage() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axios.get(`/api/cards`);
        setCards(data);
        console.log(data);
      } catch (error) {
        console.error("Ошибка при загрузке карточек:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <>
    <Row>
      {cards.map((card) => (
        <CardComp key={card.id} card={card} />
      ))}
      </Row>
    </>
  );
}

export default MainPage;
