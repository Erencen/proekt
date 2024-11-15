import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";


export default function SearchCopm({card}) {
  return (
    <Card style={{ width: "18rem" }} key={card.userId}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Цена:{card.price}</ListGroup.Item>
          <ListGroup.Item>Качество:{card.condition}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Добавить в корзину</Card.Link>
        </Card.Body>
      </Card>
  );
}
