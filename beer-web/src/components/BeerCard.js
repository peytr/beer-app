import React from 'react'

const BeerCard = ({beers}) => {
    return beers.map({id, name, description, image_url} => (
        <div key={id} className="card">
            <div className="card-title">
              <h2>{name}</h2>
            </div>
            <div className="card-body">
              <img src={image_url} alt={name}/>
              <p>{description}</p>
            </div>
        </div>
        )
    )
}