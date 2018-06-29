import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from './List';
import Form from './Form';

class Contacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func
    };

    render() {
        return (
           <div>
               <List contacts={this.props.contacts}></List>
               <Form addContact={this.props.addContact}></Form>
           </div>
        );
    }
}

export default Contacts;
