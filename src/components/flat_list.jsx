import React, { Component } from 'react';
import Flat from "./flat";

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(flat => <Flat name={flat.name} url={flat.imageUrl} key={flat.name} price={flat.price} />);
  }

  render() {
    return(
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
