import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'

const PokeContainer = ({formUrl}) => {
  // const url ='https://pokeapi.co/api/v2/pokemon?limit=100&offset=0' //dejo sin efecto esta 
  const [pokemons, getAllPokemons]= useFetch(formUrl) // le meto el estado formUrl por url
   useEffect(() => {
   getAllPokemons() //debop ejecutar la funcion
    
    
  }, [formUrl])
  
  // console.log(pokemons) ////////////////////////


   return (
     <div className='poke-container'>
        {
          
          pokemons?.results
          ? (
            pokemons?.results.map(pokemon => (
              <PokeCard
              key={pokemon.url}
              url={pokemon.url}
              />
            ))

          ) 
          : (
            pokemons?.pokemon.map(objPoke =>(
              <PokeCard
              key={objPoke.pokemon.url}
              url={objPoke.pokemon.url}
              />
            ))
            
          )
          
          }
     </div>
  )
}

export default PokeContainer