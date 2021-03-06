import React from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from "../data/flat";
import Marker from './marker';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

 

  selectFlat = (index) => {

    this.setState({
      selectedFlat: flats[index]
    });
  }

  center() {
    return{
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}


export default App;
