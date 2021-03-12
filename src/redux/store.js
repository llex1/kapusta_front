import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {initReducer as kapusta} from './initState';


const store = configureStore({
  reducer: {
    kapusta,
  },
  middleware: [...getDefaultMiddleware()]
})

export default store