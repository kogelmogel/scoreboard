import React, { Component } from 'react';
import './App.css';
import './components/Scoreboard.css'
import './components/Player.css'
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="Chess" />
          <main><Scoreboard /></main>


        </header>
      </div>
    );
  }
}

export default App;


/*

import title_fn from ".."

title_fn("sdfsdf")

*/
