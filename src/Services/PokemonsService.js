import axios from "axios";

class PokemonsService {

    static fetchPokemon(pokemonPerPage, nombrePokemonAffiche){
        return axios.get('https://pokeapi.co/api/v2/pokemon?limit='+pokemonPerPage+'&offset='+nombrePokemonAffiche);
    }

    static fetchPokemonByID(id){
        return axios.get('https://pokeapi.co/api/v2/pokemon/'+id);
    }

    static fetchPokemonSpeciesByID(id){
        return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id);
    }

    static fetchPokemonByGeneration(id){
        return axios.get("https://pokeapi.co/api/v2/generation/"+id);
    }
}

export default PokemonsService;