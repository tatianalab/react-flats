import React from 'react'

class Flat extends React.Component {
  handleClick = () => {

    this.props.pickFlat(this.props.flat)
  }

  render(){
   const imageUrl = this.props.flat.imageUrl;
        return(
          <div className="card"
          onClick={this.handleClick}
          style ={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${imageUrl})`}}
          >

            <div className="card-category">
            {this.props.flat.price} {this.props.flat.priceCurrency}
            </div>

            <div className="card-description">
            <h2>{this.props.flat.name}</h2>
            </div>


          </div>
          )}

  }



export default Flat;
