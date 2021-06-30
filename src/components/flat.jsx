import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const img = this.props.url;


    return (
      <div className="card" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url(' + img + ')'}}>
        <div className='card-category'>{this.props.price}</div>
        <div className='card-description'>
          <h2>{this.props.name}</h2>
        </div>
      </div>  
    );
  }
}
export default Flat;
