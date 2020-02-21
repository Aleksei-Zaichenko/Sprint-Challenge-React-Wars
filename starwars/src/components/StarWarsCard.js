import React from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    Col
  } from "reactstrap";
  import styled from "styled-components";

  const DogCard = styled.div`
  background: #99f3eb;
  color: black;
  width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

function StarWarsCard ({character}){

    return(
        <Col xs="6" md="4" xl="3">
            <DogCard>
                <CardHeader>Character name: {character.name}</CardHeader>
                <CardBody>
                    <CardText>Height: {character.height}</CardText>
                    <CardText>Mass: {character.mass}</CardText>
                    <CardText>Hair color: {character.hair_color}</CardText>
                    <CardText>Skin color: {character.skin_color}</CardText>
                    <CardText>Eye color: {character.eye_color}</CardText>
                    <CardText>Birth year: {character.birth_year}</CardText>
                    <CardText>Gender: {character.gender}</CardText>
                </CardBody>
            </DogCard>
        </Col>
    );
}

export default StarWarsCard;