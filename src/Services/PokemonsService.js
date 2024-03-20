import axios from "axios";

class PokemonsService {

    static fetchPokemon(){
        return axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
    }

    static fetchPokemonByID(id){
        return axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
    }

    static fetchPokemonSpeciesByID(id){
        return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
    }
}

export default PokemonsService;