import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PokemonsService from '../Services/PokemonsService';
import ReactAudioPlayer from 'react-audio-player';

const PokemonDetailPage = () => {
    // États -> states
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});

    //Comportement
    const fetchPokemon = async () => {
        const response = await PokemonsService.fetchPokemonByID(id);
        console.log(response.data);
        setPokemon(response.data);
    }

    useEffect(() => {
        fetchPokemon();
    },[])
    // Affichage
    return <>
        <h1>Détail Pokemon N°{id}</h1>
        <h2>Name : {pokemon.name}</h2>
        <h2>Poids : {pokemon.weight}</h2>
        <h2>Taille : {pokemon.height}</h2>
        <ReactAudioPlayer
            src={pokemon.cries && pokemon.cries.latest}
            // controls
            autoPlay
            volume={0.2}
        />
    </>
}

export default PokemonDetailPage;