import Button from "react-bootstrap/esm/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './CardComp.css'; // Импортируйте CSS файл

export default function CardComp({ card, handleAddToBasket }) {
  return (
    <>
      <Card className="hover-card" style={{ width: "18rem" }} key={card.userId}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Цена: {card.price}</ListGroup.Item>
          <ListGroup.Item>Качество: {card.condition}</ListGroup.Item>
          <ListGroup.Item>Продавец: {card.User.name}</ListGroup.Item>
          <ListGroup.Item>Город: {card.User.city}</ListGroup.Item>
          <ListGroup.Item>Статус: {card.status}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button onClick={() => handleAddToBasket(card.id)}>Добавить в корзину</Button>
        </Card.Body>
      </Card>
    </>
  );
}

