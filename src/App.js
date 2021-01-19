import React from 'react'
import './App.scss';
import ReactMapGL from 'react-map-gl'


import Flat from './components/Flat'
import flats from './data/flatsdata.js'
import Map from './components/Map'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allFlats: flats
    }
  }


  render(){

    const flatItems = this.state.allFlats.map(item => <Flat key={item.id} item={item} />)

    return (
      <>
      <div className="flat-list">
      {flatItems}
      </div>

      <div className="map-container">
      <Map />
      </div>
      </>
      )
  }
}


export default App;
