import React from 'react'

function Flat(props) {
  const imageUrl = props.item.imageUrl;

    return(
      <div className="card"
      style ={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${imageUrl})`}}
      >

        <div className="card-category">
        {props.item.price}{props.item.priceCurrency}
        </div>

        <div className="card-description">
        <h2>{props.item.name}</h2>
        </div>


      </div>
      )
  }



export default Flat;
