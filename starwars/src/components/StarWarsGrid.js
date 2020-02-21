import React,{useState, useEffect} from 'react';
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import { Container, Row } from "reactstrap";

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