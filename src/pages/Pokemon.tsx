import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PokeballImg from '../assets/pokeball.png'
import Footer from '../components/Footer';
import styles from './pokemon.module.css'
import { PokemonDetails } from '../types/types.d';
import { fetchPokemon } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

const Pokemon = () => {
const [isLoading,setIsLoading ] = useState(false)
const [pokemon, setPokemon] = useState<PokemonDetails>();
const {name} = useParams();
const navigate = useNavigate();

useEffect(() => {
 async function getPokemon(){
  setIsLoading(true);
  await waitFor(500);
  const fetchedPokemon = await fetchPokemon(name as string);
  setPokemon(fetchedPokemon);
  setIsLoading(false);
 }
  getPokemon();
 
}, [name]);


if (isLoading || !pokemon) {
  return <LoadingScreen />;
}


  return (
  <>
    <button className={styles.pokeballButton} onClick={()=>navigate(-1)}>
      <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> Regresar
    </button>
    <div className={styles.pokemon}>
      <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>{name?.toLocaleUpperCase()}</div>
          <div>Nr. {pokemon?.id}</div>
          <div><img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt="bulbasaur" /></div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>



      </main>
    </div>


    <Footer/>


</>
  )
};

export default Pokemon;
