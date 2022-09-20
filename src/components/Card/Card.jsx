import React from 'react'
import './Card.css'
export const Card = ({title,release,poster,id}) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
        <div className="card"  key={id}>
            <img src={imgUrl + poster} alt="card-img" />
            <div className="card_details">
                <h2>{title}</h2>
                <p>{release}</p>
            
            </div>
        </div>
    </div>
  )
}
