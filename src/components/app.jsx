import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from "../data/flat";
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   flats: flats.name
    // }
  }



  render() {
    const allFlats = flats;
    return(
      <div>
       <FlatList flats={allFlats} />
       <Map  flats={allFlats}/>
      </div>
    )
  }
}


export default App;
