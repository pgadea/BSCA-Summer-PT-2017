import React, { Component } from 'react';
import Welcome from './Welcome';
import Address from './Address'
import Customer from './Customer'
import DATA from './DATA'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#ecf0f1'}}>
        <Welcome title={DATA.title} />
        <Address street={DATA.street} city={DATA.city} state={DATA.state} zip={DATA.zip} phoneNumber={DATA.phoneNumber} />
        <Customer customers={DATA.customers} />
      </div>
    );
  }
}

export default App
