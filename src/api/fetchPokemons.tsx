//http://unpkg.com/pokemons@1.1.0/pokemons.json

import { error } from "console";
import { formatName } from "../utils/utils";
import { Pokemon } from "../types/types.d";


export async function fetchPokemons():Promise<Pokemon[]> {
    const response = await fetch(
        "http://unpkg.com/pokemons@1.1.0/pokemons.json"
    );

    if (!response.ok){
        throw new Error("Faild to fetch pokemons")

    }

    const results = await response.json()
    console.log(results)

    const pokemons = results.results.map((pokemon:any) =>({

        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`


    }))

    const uniquePokemons = pokemons.filter(
        (pokemon:any, index: number) =>
            pokemons.findIndex((other:any)=>other.id === pokemon.id) === index
    );
    return uniquePokemons

}