// shortcut - imrc 
import React, { Component } from 'react';
import Counter from './counter';

// shortcut - cc
class Counters extends Component {
    state = { 
        counters: [
            {id : 1, value: 4 },
            {id : 2, value: 0 },
            {id : 3, value: 0 },
            {id : 4, value: 0 }
        ]
     };

     handleIncrement = counter => {
         console.log(counter);
     }

    handleDelete = counterId => {
        // console.log("Event Handler called!", counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId)
        // ###update the current state 
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    // we're passing the references on this function by, onDelete={this.handleDelete}
    render() { 
        return (
            
        <div>
            <button 
                onClick= {this.handleReset}
                className="btn btn-primary btn-sm m-2"
                >Reset</button><br/>
            {this.state.counters.map( 
                counter => 
                <Counter 
                    key = {counter.id} 
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    // value={counter.value} 
                    // id={counter.id}
                    counter={counter}>
                 </Counter> // selected={true} // <h4> Counter #{counter.id}</h4>
            )}
        </div>);
    }
}
 
export default Counters;