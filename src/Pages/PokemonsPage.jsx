import React, { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";
import PokemonsService from "../Services/PokemonsService";
import Pagination from 'react-bootstrap/Pagination';

const PokemonsPage = () => {
    // États -> States
    const [pokemons, setPokemons] = useState([]);
    const [pokemonPerPage, setPokemonPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(20);

    // Comportements -> Les functions
    const getPokemons = async () => {
        let nombrePokemonAffiche = pokemonPerPage * (currentPage - 1);
        const response = await PokemonsService.fetchPokemon(pokemonPerPage, nombrePokemonAffiche);
        setMaxPage(Math.ceil(response.data.count / pokemonPerPage));
        setPokemons(response.data.results);
    }

    useEffect(() => {
        getPokemons();
    }, [currentPage])

    //Affichage -> return
    return <>
        <h1 className="text-center">Pokemons</h1>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
            {pokemons.map((pokemon) => {
                return <PokemonCard nom={pokemon.name} id={pokemon.url.slice(33).replaceAll("/", "")} />
            })}
        </div>
        <div className="d-flex justify-content-center mt-4">
            <Pagination>
                {/* Si currentPage est strictement supérieur à 1 alors j'afficher mes éléments se trouvant dans les <> </> */}
                {currentPage > 1 && <>
                    <Pagination.First onClick={() => { setCurrentPage(1) }} />
                    <Pagination.Prev onClick={() => { setCurrentPage(currentPage - 1) }} />
                    <Pagination.Item onClick={() => { setCurrentPage(1) }}>{1}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1) }}>{currentPage - 1}</Pagination.Item>
                </>}

                <Pagination.Item active>{currentPage}</Pagination.Item>

                {/* Si currentPage est strictement inférieur à la variable max Page 
                    alors j'afficher mes éléments se trouvant dans les <> </> */}
                {currentPage < maxPage && <>
                    <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1) }}>{currentPage + 1}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item onClick={() => { setCurrentPage(maxPage) }}>{maxPage}</Pagination.Item>
                    <Pagination.Next onClick={() => { setCurrentPage(currentPage + 1) }} />
                    <Pagination.Last onClick={() => { setCurrentPage(maxPage) }} />
                </>}

            </Pagination>
        </div>

    </>
}

export default PokemonsPage;