import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function CardComp({ card }) {
  return (
    <>
      <Card style={{ width: "18rem" }} key={card.userId}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Цена:{card.price}</ListGroup.Item>
          <ListGroup.Item>Качество:{card.condition}</ListGroup.Item>
          <ListGroup.Item>Продавец:{card.User.name}</ListGroup.Item>
          <ListGroup.Item>Город:{card.User.city}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Добавить в корзину</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
