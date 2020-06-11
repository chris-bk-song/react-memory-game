import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard.js';
import './App.css';

// Helper function that can generate a deck of memory cards
// This is basic JS function that returns an array of cards
function generateDeck() {
  var symbols = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
  var deck = []
  // For loop that will loop 16 times
  for (let i=0; i<28; i++) { 
    deck.push({
      isFlipped: false,
      symbol: symbols[i%14]
    })
  }
  return shuffle(deck);
}

// ES6 shuffle function from stackoverflow copied after generateDeck function
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// functional component turned into a class component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Make the deck property point to a call to generateDeck()
      deck: generateDeck(),
      pickedCards: []
    }
  }
  pickCard(cardIndex) {
    // This checks if the card we're trying to pick is already flipped
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }

    // This creates a copy of the card in the state's deck array at the position of cardIndex
    var cardToFlip={...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;

    // concat returns a brand new array with all the old contents but it also inserts cardIndex
    var newPickedCards=this.state.pickedCards.concat(cardIndex);
    
    var newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      }
      return card
    })

    if (newPickedCards.length === 2) {
      var card1Index=newPickedCards[0]
      var card2Index=newPickedCards[1]
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => {
          this.unflipCards(card1Index, card2Index)
        }, 1000);
      }
      newPickedCards = [];
    }

    this.setState(
      {deck: newDeck, pickedCards: newPickedCards}
    )
  }
  
  unflipCards(card1Index, card2Index) {
    var card1={...this.state.deck[card1Index]}
    var card2={...this.state.deck[card2Index]}
    card1.isFlipped = false
    card2.isFlipped = false

    var newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1
      }
      if (card2Index === index) {
        return card2
      }
      return card
    })
    this.setState(
      {deck: newDeck}
    )
  }

  render() {
    console.log(this.state)
    var cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        // Add  two props to the <MemoryCard /> component inside return statement
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        // Add key prop
        key={index}
        // Add another prop pickCard
        pickCard={this.pickCard.bind(this, index)}
      />
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <p className="Subtitle">with Korean consonants</p>
        </header>
        <div className="Body">
          <div>{cardsJSX.slice(0,4)}</div>
          <div>{cardsJSX.slice(4,8)}</div>
          <div>{cardsJSX.slice(8,12)}</div>
          <div>{cardsJSX.slice(12,16)}</div>
          <div>{cardsJSX.slice(16,20)}</div>
          <div>{cardsJSX.slice(20,24)}</div>
          <div>{cardsJSX.slice(24,28)}</div>
        </div>
      </div>
    );
  }
}

export default App;