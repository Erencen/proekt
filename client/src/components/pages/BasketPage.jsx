import  { useEffect, useState } from "react";
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
  

  const handleOrder = async (cardId) => { 
    try { 
      
      await axiosInstance.put(`/cards/${cardId}`, { status: "Нет в наличии" }); 
       
       
      setCards((prevCards) => 
        prevCards.map((card) => 
          card.id === cardId ? { ...card, status: "нет в наличии" } : card 
        ) 
      ); 
    } catch (error) { 
      console.error("Ошибка при обновлении статуса карточки:", error); 
    } 
  };
  
  return (
    <Row>
      {cards.map((card) => (
        <BasketComp key={card.id} card={card} handleOrder={handleOrder}/>
      ))}
    </Row>
  );
}
