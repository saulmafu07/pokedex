import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';

const Pokemons = () => {

    const [query,setQuery] = useState("")
    return(

  <>
  <Header query={query} setQuery={setQuery} />


  <main>
    <h1>POKEMONS</h1>
    <Footer/>
  </main>
  </>
  )
}

export default Pokemons
