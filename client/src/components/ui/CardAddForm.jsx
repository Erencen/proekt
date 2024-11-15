import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import axiosInstance from "../api/axiosInstance";


export default function CardAddForm() {
// const navigate = useNavigate();
const submitHandler = async (event) => {
  event.preventDefault();
  try {
    const dataFromForm = event.target;
    const newDataFromForm = new FormData(dataFromForm);
    const cardData = Object.fromEntries(newDataFromForm);
    if (!cardData.title || !cardData.img || !cardData.price || !cardData.condition) {
        alert ('Не все поля заполнены, заполните все поля')
        return;
    }
    await axiosInstance.post("/cards", cardData);
   // navigate("/")
    event.target.reset();
  } catch(error) {
    console.log(error)
  }
}
return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Form onSubmit={submitHandler}  className="d-flex flex-column">
        <Form.Control
          name="title"
          type="text"
          placeholder="Название карточки"
          className="mb-3"
        />
        <Form.Control
          name="img"
          type="text"
          placeholder="Ссылка на изображение"
          className="mb-3"
        />
        <Form.Control
          name="price"
          type="integer"
          placeholder="Цена карточки"
          className="mb-3"
        />
                <Form.Control
          name="condition"
          type="text"
          placeholder="Состояние карточки"
          className="mb-3"
        />

        <Button type="submit" variant="light" className="mb-3 center ">
                Save
        </Button>
      </Form>
    </Container>
  );
}