
import axios from "axios"
import { useState } from "react"

const useFetch = url => {
const [state, setState] = useState()
const getData = () =>{
    axios.get(url)
    .then(res => setState(res.data))
    .catch(err => console.log(err))
 }
return [state,getData]
}

export default useFetch










//'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
// import React, { useState } from 'react'


// const UseFetch = url => {
//     const [state,setState]=useState()
   
//     const getData = () => {
//         axios.get(url)
//         .then(res => setState(res.data))
//         .fetch(err => console.log(err))
//     } 
// } 

// export default UseFetch