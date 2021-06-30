import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  class Map extends Component {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {this.props.allFlats.map( flat => <Marker
          lat={flat.lat}
          lng={flat.long}
          text="My Marker"
          />)}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
