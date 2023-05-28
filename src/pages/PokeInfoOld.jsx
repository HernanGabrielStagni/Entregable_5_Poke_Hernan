
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import React, { useEffect } from 'react'
import './styles_pages/styles_PokeInfo.css'
import InfoCard from '../components/Poke_Info_folder/InfoCard'

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
            <div className='pokeInfo' >

               <InfoCard pokemon={pokemon}/>
         
            </div>
          </>
           }
       
    </div>
  )
}

export default PokeInfo