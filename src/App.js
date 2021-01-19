import React from 'react'
import './App.scss';
import GoogleMapReact from 'google-map-react';


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
    const center = {
      Lat:48.8566,
      Lng:2.3522
    }

    const flatItems = this.state.allFlats.map(item => <Flat key={item.id} item={item} />)

    return (
      <>
      <div className="flat-list">
      {flatItems}
      </div>

      <div className="map-container">
      <GoogleMapReact
          center={center}
          Zoom={11}
        >
        </GoogleMapReact>
      </div>
      </>
      )
  }
}


export default App;
