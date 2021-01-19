import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl'

function Map (){
  const REACT_APP_MAPBOX_ACCESS_TOKEN="pk.eyJ1IjoidGF0aWFsYWIiLCJhIjoiY2toNTFtemxjMGNjbDJzcXZyOHlqMDFyZCJ9.wahnCxzAg2kn5MRNnp3AwQ"

  const [viewport, setViewport] = useState ({
    latitude: 48.8566,
    longitude: 2.3522,
    width:"100%",
    height:"100vh",
    zoom:10
  });

  return (

    <ReactMapGL {...viewport}
    mapboxApiAccessToken = {REACT_APP_MAPBOX_ACCESS_TOKEN}
    mapStyle = "mapbox://styles/tatialab/ckk43xehh3b5k17mjbaipfsis"
    onViewportChange= {viewport => {
    setViewport(viewport);
}}
     >
      Markers
    </ReactMapGL>

    )
}

export default Map


