import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map((character, index) => {
          return <CharacterCard character={character} key={index} />;
        })}
      </Row>
    </Container>
  );
}
