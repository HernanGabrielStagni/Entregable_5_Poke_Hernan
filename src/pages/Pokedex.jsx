import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'


const Pokedex = () => {
  const urlBase='https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  const [formUrl,setFormUrl]=useState(urlBase) // creo este estado para pasar la informacion entre hermanos
  // voy a usar los values que consegui con onChange
  // formPoke y pokeContainer  son hijos de la rurta Pokedex(no hace falta un estadpo global)

    const {trainerName}=useSelector(state=>state)
 
    return (
    <div>
        <h1>PokedexPoke</h1>
        <p><span>Welcome: {trainerName} </span></p>
         <FormPoke urlBase={urlBase} setFormUrl={setFormUrl}/> {/*le pase la props para que guarde el estado */}
        <PokeContainer formUrl={formUrl}/> 
    </div>
  )
}

export default Pokedex