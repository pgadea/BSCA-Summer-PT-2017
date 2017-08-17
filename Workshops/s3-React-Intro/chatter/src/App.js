import React, { Component } from 'react';
import './App.css';
import {Main, Chat} from './components';
import DATA from './DATA.js';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Chat chats={DATA.chats} />
      </div>
    );
  }
}

export default App;
