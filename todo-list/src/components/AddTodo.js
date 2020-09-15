import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // e.target gives you all the value of form data 
    onChange = (e) => this.setState({[e.target.name]:
        e.target.value
    });

    onSubmit = (e) => {
        // we don't want to go another page, so prevent from go
        e.preventDefault();
        // add the title value to props (prop name : addTodo)
        this.props.addTodo(this.state.title);
        // the set the title (which is props) value is empty
        this.setState({ title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input 
                        type="text" 
                        name="title"
                        style={{flex: '10', padding: '5px'}}
                        placeholder="Add Todo ..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{flex: '1'}}
                    />
                </form>
            </div>
        )
    }
}

//PropTypes :: used to validate the properties required or not
AddTodo.propType = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
