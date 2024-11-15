import Row from "react-bootstrap/esm/Row";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SearchCopm from "../ui/SearchCopm";
import '../ui/SearchPage.css';

export default function SearchPage() {
  const [searchCard, setSearchCard] = useState([]);
  const [input, setInput] = useState('');

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    let timeoutId;
    if (input) {
      timeoutId = setTimeout(() => {
        axios(`/api/search/?filter=${input}`).then((res) =>
          setSearchCard(res.data)
        );
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setSearchCard([]);
    }
  }, [input]);

  return (
    <div className="search-page">
      <InputGroup className="input-group">
        <InputGroup.Text id="basic-addon1">Поиск</InputGroup.Text>
        <Form.Control
          placeholder="Например: ZXC Гуль"
          name="search"
          value={input}
          onChange={changeHandler}
        />
      </InputGroup>
      <Row>
        {searchCard.map((card) => (
          <div className="search-card" key={card.id}>
            <SearchCopm card={card} />
          </div>
        ))}
      </Row>
    </div>
  );
}
