import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import BulbasaurPic from "../assets/bulbasaur.gif"
import styles from "../components/pokemons.module.css"
import { fetchPokemons } from '../api/fetchPokemons';

const Pokemons = () => {

    const [query,setQuery] = useState("");
    const [pokemons,setPokemons] = useState([]);

    useEffect(() => {
      const fetchAllPokemons = async ()=>{
        const allPokemons = await fetchPokemons();
        setPokemons(allPokemons);
      };
      fetchAllPokemons();
    },[]);

    return(

  <>
  <Header query={query} setQuery={setQuery} />


  <main>
   <nav>
    {pokemons?.slice(0,151).map((pokemon) => (
    <Link className={styles.listItem} to="/">
      <img className={styles.listItemIcon} src={BulbasaurPic} alt="bulbasaur" />
      <div className={styles.listItemText}>
      <span>Bulbasaur</span>
      <span>001</span>
      </div>
    </Link>
    
      ))}

    


   </nav>
  </main>
  <Footer/>
  </>
  )
}

export default Pokemons
