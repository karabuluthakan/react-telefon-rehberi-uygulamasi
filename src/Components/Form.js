import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component{

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func
    };

    state = {
        name:'',
        phone:''
    };

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    onSubmit(e){
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });

        this.setState({
            name:'',
            phone:''
        })
    };

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" id="name"
                           value={this.state.name} onChange={this.onChange}
                           placeholder="Enter a name"/>
                    <br/>
                    <input type="text" name="phone" id="phone"
                           value={this.state.phone} onChange={this.onChange}
                           placeholder="Enter a phone"/>
                    <br/>
                    <br/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Form;