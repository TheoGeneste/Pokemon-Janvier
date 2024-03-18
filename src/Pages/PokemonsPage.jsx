import React, { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";
import PokemonsService from "../Services/PokemonsService";

const PokemonsPage = () => {
    // États -> States
    const [pokemons, setPokemons] = useState([]);

    // Comportements -> Les functions
    const getPokemons = async () => {
        const response = await PokemonsService.fetchPokemon();
        setPokemons(response.data.results);
    }

    useEffect(() => {
        getPokemons();
    }, [])
    
    //Affichage -> return
    return <>
        <h1 className="text-center">Pokemons</h1>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
            {pokemons.map((pokemon) => {
                return <PokemonCard  nom={pokemon.name} url={pokemon.url} />
            })}
        </div>
        {/* <div className="d-flex gap-3 flex-wrap justify-content-center">
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
            <PokemonCard image={pikachuImage} nom={"Pikachu"} type={"Eclair"} description={"Ce pokemon vous foudroie"} pv={150}/>
        </div> */}
    </>
}

export default PokemonsPage;