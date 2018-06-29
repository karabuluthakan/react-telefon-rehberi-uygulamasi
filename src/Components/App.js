import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from './Contacts';


class App extends Component {

    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
    }

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

    addContact(contact){
        const {contacts} =this.state;
        contacts.push(contact);

        this.setState({
            contacts
        })
    };

  render() {
    return (
      <div className="App">
        <Contacts
            addContact={this.addContact}
            contacts={this.state.contacts}>
        </Contacts>
      </div>
    );
  }
}

export default App;
