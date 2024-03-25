import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import VersionService from '../Services/VersionService';
import PokemonsService from '../Services/PokemonsService';
import PokemonCard from '../Components/PokemonCard';

const PokemonByVersion = () => {
    // États
    const {idVersion} = useParams();
    const [version, setVersion] = useState({});
    const [pokemons, setPokemons] = useState([]);

    // Comportements
    const getVersions = async () => {
        const response = await VersionService.getVersionByID(idVersion);
        setVersion(response.data);
        const generation = await PokemonsService.fetchPokemonByGeneration(response.data.generation.url.slice(36).replaceAll("/", ""))
        setPokemons(generation.data.pokemon_species);
    }

    useEffect(() => {
        getVersions()
    }, [])


    // Affichage
    return <>
        <h1 className='text-center'>Pokemon de {version.name}</h1>
        <div className="d-flex gap-3 flex-wrap justify-content-center mt-3">
            {pokemons.map((pokemon) => {
                return <PokemonCard nom={pokemon.name} id={pokemon.url.slice(42).replaceAll("/", "")} />
            })}
        </div>
    </>

}

export default PokemonByVersion;