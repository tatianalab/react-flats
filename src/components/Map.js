import React, {useState} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import flats from '../data/flatsdata.js'

function Map (props){
  const REACT_APP_MAPBOX_ACCESS_TOKEN="pk.eyJ1IjoidGF0aWFsYWIiLCJhIjoiY2toNTFtemxjMGNjbDJzcXZyOHlqMDFyZCJ9.wahnCxzAg2kn5MRNnp3AwQ"
  let [viewport, setViewport] = useState ({
    latitude: 48.8566,
    longitude: 2.3522,
    width:"100%",
    height:"100vh",
    zoom:10
  });
  const [selectedFlat, setSelectedFlat] = useState(null);

  const chosenFlat = () => {
    console.log(this.props.pickedFlat.name)
  }

  return (

    <ReactMapGL {...viewport}
    mapboxApiAccessToken = {REACT_APP_MAPBOX_ACCESS_TOKEN}
    mapStyle = "mapbox://styles/tatialab/ckk43xehh3b5k17mjbaipfsis"
    onViewportChange= {viewport => {
    setViewport(viewport);
    }}
     >
       {flats.map((flat) => (
        <Marker key={flat.id} latitude={flat.lat} longitude={flat.lng}>
          <button className="marker-btn"
                onClick= {(event) => {
                  event.preventDefault()
                  setSelectedFlat(flat)
                }} >
            <img src="/red-marker.svg" alt="flat" />
          </button>
            </Marker>
        ))}

           {selectedFlat ? (
            <Popup
            latitude={selectedFlat.lat}
            longitude={selectedFlat.lng}
            onClose={(event) =>{
              setSelectedFlat(null)
            }}
            >
            <div>
              <h3>{selectedFlat.name}</h3>
              <h4>{selectedFlat.price} {selectedFlat.priceCurrency} per Night</h4>
            </div>
            </Popup>
            )  : null}

    </ReactMapGL>

    )
}

export default Map


