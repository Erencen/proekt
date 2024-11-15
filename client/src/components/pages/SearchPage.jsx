import Row from "react-bootstrap/esm/Row";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SearchCopm from "../ui/SearchCopm";

export default function SearchPage() {
    const [searchCard, setSearchCard] = useState([]);
    const [input, setInput] = useState();

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
    <>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <Form.Control
          placeholder="Например: Serra Angel"
          name="search"
          value={input}
          onChange={changeHandler}
          aria-label="search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    <Row>
      {searchCard.map((card) => (
        <SearchCopm key={card.id} card={card} />
      ))}
      </Row>
    </>
  )
}
