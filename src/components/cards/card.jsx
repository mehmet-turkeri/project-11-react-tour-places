import React from 'react'
import "./card.scss"

const card = ({data}) => {    
    return (
      <div className="container">
        {data.map((i) => {
          return (
            <div className="cards">
              <h1>{i.title}</h1>
              
              <img src={i.image} alt="" />
              <div className='card-over'>
              <p>{i.desc}</p>
              </div>
              
            </div>
          )
        })}
      </div>
    )
  }
  
  export default card;