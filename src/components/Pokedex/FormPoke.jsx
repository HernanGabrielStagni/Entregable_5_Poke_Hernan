import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const FormPoke = ( {setFormUrl,urlBase} ) => {

const inputPoke=useRef()

const navigate=useNavigate()

const url = 'https://pokeapi.co/api/v2/type/' //End point de la api que trae "...un listado de los tipos de Pokes..."
const [ types, getAllTypes] = useFetch(url) //por eso la url es fija
//el hook que cree me devuelve el estado con la info, y  la funcion que lo modifica, no uso el hasError

useEffect(() =>{
  getAllTypes()
},[])

const handleSubmit = (e) =>{
    e.preventDefault()
    const path=`/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
    navigate(path) //arma la ruta ..../pokedex/${ } y la navega
  }
  
  const handleChange = (e) =>{

    setFormUrl(e.target.value) //seteamos el estado con lo que capturamos en onChange

  }
  
  
  useFetch
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={inputPoke} type="text" />
            <button>Search</button>
        </form>

        
        <select onChange={handleChange} id="">
        <option value={urlBase}>All Pokemons</option>

        {
          types?.results.map((type) =>(
            <option key={type.url} value={type.url}>{type.name}</option>
          ))

        }
       
          
        </select>

   </div>
  )
}

export default FormPoke



