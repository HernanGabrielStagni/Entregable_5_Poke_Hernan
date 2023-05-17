
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import React, { useEffect } from 'react'


const PokeInfo = () => {
  
  const { name } = useParams() //para capturar el parametro // destructuramos
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`// le agregamos el parametro a la url
  const [pokemon, getPokemonByName,hasError] = useFetch(url) //hook que cree que me devuelve un arreglo
  //me trae el estado, la funcion 

useEffect(() => {
  getPokemonByName()

}, [name])

console.log(pokemon)

  return (
       
    <div>
      
      {
        hasError
        ?  <h1>This pokemon is not exist ❌</h1>
        :  
        
          <>
             <h2>{pokemon?.name}</h2>
             <img className='pokeInfoCard__header-sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="img pokemon" />
          </>
           }
        <h2>{pokemon?.name}</h2>
        <img className='pokeInfoCard__header-sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="img pokemon" />
    
    </div>
  )
}

export default PokeInfo