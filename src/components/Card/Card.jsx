import React from 'react'
import "./Card.css"

function Card({title, image, onClick}) {
  return (
    <div className="card" onClick={onClick}>
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt={title} />
        </div>
    </div>
  )
}

export default Card