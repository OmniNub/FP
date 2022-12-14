import logo from './logo.svg';
import './App.css';
import BorderedImageFrame from './BorderedImageFrame.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BorderedImageFrame imgurl={require('./AoT.jpeg')}/>
    </div>
  );
}

export default App;
