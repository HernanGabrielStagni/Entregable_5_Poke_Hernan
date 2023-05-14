import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'

const PokeContainer = () => {
  const url ='https://pokeapi.co/api/v2/pokemon?limit=5&offset=0'
  const [pokemons, getAllPokemons]= useFetch(url) //destructuro el arreglo que respeta orden y no nombre
  
   useEffect(() => {
   getAllPokemons() //debop ejecutar la funcion
    
    
  }, [])
  
  // console.log(pokemons) ////////////////////////


   return (
     <div className='poke-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokeCard
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
          }
     </div>
  )
}

export default PokeContainer