import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import BasketComp from "../ui/BasketComp";

export default function BasketPage() {
  const [cards, setCards] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axiosInstance.get(`/cards/basket/${userId}`);
        setCards(data);
      } catch (error) {
        console.error("Ошибка при получении карточек:", error);
      }
    };

    fetchCards();
  }, [userId]);
  console.log(cards);
  
  return (
    <Row>
      {cards.map((card) => (
        <BasketComp key={card.id} card={card} />
      ))}
    </Row>
  );
}
