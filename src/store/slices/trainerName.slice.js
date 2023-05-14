import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice=createSlice({
    name:"trainerName",
    initialState:"",
    reducers:{
        setTrainerName:(state,action)=>action.payload
        //ojo con los action y actions 
    }
})
 export const {setTrainerName}=trainerNameSlice.actions
export default trainerNameSlice.reducer
//es el nombre de la funcion.reducer y es el representante del estado