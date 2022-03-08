import React from 'react'
import GoogleMapReact  from 'google-map-react';
import "./Map.css";


function Map() {

  const coordinates = {lat: 0, lng:0};

  return (
    <div className='mapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyAoF3dXJPjzXyNJr63xz6EJ9TpNNFlz3Zk"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >
      </GoogleMapReact>
      </div>
  )
}

export default Map