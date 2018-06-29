import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from './Contacts';


class App extends Component {

    state = {
        contacts: [{
            name: 'Hakan',
            phone: '0543 444 44 44'
        },{
            name: 'Murat',
            phone: '0543 555 55 55'
        },{
            name: 'Sencer',
            phone: '0543 666 66 66 '
        },{
            name: 'Samet',
            phone: '0543 777 77 77'
        },]
    };

  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts}> </Contacts>
      </div>
    );
  }
}

export default App;
