import React, { useEffect, useState } from 'react'
import PokemonsService from '../Services/PokemonsService';
import PokemonCard from '../Components/PokemonCard';
import { useParams } from 'react-router-dom';

const GenerationsPage = () => {
    // États -> States
    const { idGeneration } = useParams()
    const [pokemonsByGeneration, setPokemonsByGeneration] = useState([]);
    const [generation, setGeneration] = useState({})

    // Comportements -> Les functions
    const getPokemonsByGeneration = async () => {
        const response = await PokemonsService.fetchPokemonByGeneration(idGeneration);
        setGeneration(response.data);
        response.data.pokemon_species.sort((a, b) => {
            return a.url.slice(42).replaceAll("/", "") - b.url.slice(42).replaceAll("/", "")
        })
        setPokemonsByGeneration(response.data.pokemon_species);
    }

    useEffect(() => {
        getPokemonsByGeneration();
    }, [])
    //Affichage -> return
    return <>
        <h1 className='text-center'>{generation.names && generation.names[3].name}</h1>
        <div className="d-flex gap-3 flex-wrap justify-content-center mt-3">
            {pokemonsByGeneration.map((pokemon) => {
                return <PokemonCard nom={pokemon.name} id={pokemon.url.slice(42).replaceAll("/", "")} />
            })}
        </div>
    </>
}

export default GenerationsPage
