import React, { Component } from 'react'

import './MemoryCard.css';
import logo from '../images/logo-wrench-white.png';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
    };
  }

  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    let innerClass = "MemoryCard__inner";
    if (this.state.isFlipped) {
      innerClass += ' flipped';
    }
    return (
      <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
        <div className={innerClass}>
          <div className="MemoryCard__back">
            <img src={logo} alt="" />
          </div>
          <div className="MemoryCard__front">
            ∆
          </div>
        </div>
      </div>
    )
  }
}

export default Card;