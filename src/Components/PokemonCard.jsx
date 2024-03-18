import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PokemonCard = ({nom, url}) => {
    // State

    //Comportement
    console.log(url.slice(33).replaceAll("/", ""));

    //Affichage
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ url.slice(33).replaceAll("/", "") + ".png"} />
            <Card.Body>
                <Card.Title>{nom[0].toUpperCase() + nom.slice(1)}</Card.Title>
                <Link to={"/pokemon/"+url.slice(33).replaceAll("/", "")}>
                    <Button variant="primary">Voir détails</Button>
                </Link>
            </Card.Body>
        </Card>
    </>
}

export default PokemonCard;