import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PokemonsService from '../Services/PokemonsService';
import PokemonCard from '../Components/PokemonCard';

const PokemonByType = () => {
    // États
    const {idType} = useParams();
    const [pokemons, setPokemons] = useState([]);
    const [type, setType] = useState({})

    //Comportements
    const getPokemonByType = async () => {
        const response = await PokemonsService.fetchPokemonByType(idType);
        setType(response.data);
        setPokemons(response.data.pokemon);
    }

    useEffect(() => {
        getPokemonByType()
    }, [])

    //Affichage
    return <>
        <h1 className='text-center'>{type.names && type.names[3].name}</h1>
        <div className="d-flex gap-3 flex-wrap justify-content-center mt-3">
            {pokemons.map((pokemon) => {
                return <PokemonCard nom={pokemon.pokemon.name} id={pokemon.pokemon.url.slice(33).replaceAll("/", "")} />
            })}
        </div>
    </>
}

export default PokemonByType;