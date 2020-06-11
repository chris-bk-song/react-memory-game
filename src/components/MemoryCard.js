import React, { Component } from 'react'

import './MemoryCard.css';

import logo from '../images/logo-wrench-white.png';

class Card extends Component {
  render() {
    let innerClass = "MemoryCard__inner";
    if (this.props.isFlipped) {
      innerClass += ' flipped';
    }
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={innerClass}>
          <div className="MemoryCard__back">
            <img src={logo} alt="DigitalCrafts Logo" />
          </div>
          <div className="MemoryCard__front">
            {this.props.symbol}
          </div>
        </div>
      </div>
    )
  }
}

export default Card;