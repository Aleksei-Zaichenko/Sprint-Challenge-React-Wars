import React,{useState, useEffect} from 'react';
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import { Container, Row } from "reactstrap";
import styled from "styled-components";

const DogButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.primary ? "pink" : "yellow")};
  color: ${props => (props.primary ? "yellow" : "pink")};
  border: 0;
  margin: 5px 10px;
`;

function StarWarsGrid (){

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response.data.results);
                setCharacters(response.data.results);
          })
          .catch(error => {
            console.log("Sorry, an error occured", error);
          });
      }, []);

    return(
        <Container>
            <Row>
                {characters.map( (character,id) =>{
                    return <StarWarsCard character={character} key={id} />;
                })}
            </Row>
        </Container>
    )
}

export default StarWarsGrid;