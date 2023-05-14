 import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice";

export default configureStore({
        reducer:{ //aca iran los estados globales
        trainerName
        }
 })
