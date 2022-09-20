import React from 'react'
import './Movies.css'
import { Card } from '../Card/Card'
import {useQuery} from 'react-query'
import { useState } from 'react'


export const Movies = () => {
 const [data, setData] = useState([])

 const apiKey= "8a5affec5956038d2833fa589dac1040";
 useQuery('movie' , () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    .then((res) => res.json())
    .then((data) => setData(data.results))
 })

  return (
    <div>
        <section className='movie_cards'>
            {data.map((para) => {
                return <Card title={para.title} release={para.release_date} poster={para.poster_path} id={para.id}/>
            })}
        </section>
    </div>
  )
}
