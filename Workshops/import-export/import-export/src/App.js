import React, { Component } from 'react';
import SubmitButton from './components/SubmitButton'
import WhiteButton, {BlueButton as MainButton, OrangeButton, GreenButton} from './components/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <SubmitButton />
        <MainButton />
        <OrangeButton />
        <GreenButton />
        <WhiteButton />
      </div>
    );
  }
}

export default App;
