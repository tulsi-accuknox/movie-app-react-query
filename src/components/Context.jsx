import React, {createContext} from 'react'
import { useState } from 'react';


export const cardContext = createContext();

export const Context = ({children}) => {
  const [input , setInput] = useState('')

  const [movieData,setMovieData] = useState([]);

  return (
    <cardContext.Provider value={{input,setInput,movieData,setMovieData}}>
        {children}
    </cardContext.Provider>
  )
}
