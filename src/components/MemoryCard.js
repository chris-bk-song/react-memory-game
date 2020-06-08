import React, { Component } from 'react'; 

import './MemoryCard.css';

import logo from '../images/logo-wrench-white.png';

class MemoryCard extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <img src={logo}></img>
      </div>
    )
  }
}

export default MemoryCard;