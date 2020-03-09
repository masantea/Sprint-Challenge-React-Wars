import React from "react";

import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

const CharacterCard = ({ character }) => {
  return (
    // <div className="character-list" key={props.id}>
    //   <h2>Name: {props.name}</h2>
    //   <h2>Birth Year: {props.birthYear}</h2>
    //   <h2>Gender: {props.gender}</h2>
    //   <h2>Homeworld: {props.homeWorld}</h2>
    // </div>

    <Col xs="6" md="4" xl="3">
      <Card>
        <CardHeader>Name: {character.name}</CardHeader>
        <CardBody>
          <CardText>Birth Year: {character.birth_year}</CardText>
          <CardText>Gender: {character.gender}</CardText>
          <CardText>Eye Color: {character.eye_color}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharacterCard;
