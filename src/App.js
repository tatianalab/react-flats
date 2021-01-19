import React from 'react'
import './App.scss';
// import ReactMapGL from 'react-map-gl'



import Flat from './components/Flat'
import flats from './data/flatsdata.js'
import Map from './components/Map'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allFlats: flats,
      pickedFlat: null
    }
  }

  pickFlat = (flat) => {
    // console.log(flat)
    this.setState({
      pickedFlat: flat
    })
  }


  render(){

    const flatItems = this.state.allFlats.map(flat => <Flat key={flat.id} flat={flat} pickFlat={this.pickFlat} />)

    return (
      <>
      <div className="flat-list">
      {flatItems}
      </div>
      <div className="map-container">
      <Map pickFlat={this.pickFlat} />
      </div>
      </>
      )
  }
}


export default App;
