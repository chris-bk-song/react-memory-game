import React from 'react';

import MemoryCard from './components/MemoryCard.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p className="Subtitle">Match cards to win</p>
      </header>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        
    </div>
  );
}

export default App;
