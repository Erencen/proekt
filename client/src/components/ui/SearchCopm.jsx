import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

export default function SearchCopm() {
    const [input, setInput] = useState()
    const [searchCard, setSearchCard] = useState()
    useEffect(() => {
        let timeoutId;
        if (input) {
          timeoutId = setTimeout(() => {
            axios(`/api/search/?filter=${input}`).then((res) =>
              setSearchCard(res.data)
            );
          }, 500);
          return () => clearTimeout(timeoutId)
        } else {
          setSearchCard([])
        }
      }, [input]);
    return (
        
  )
}
