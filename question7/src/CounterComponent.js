import React from 'react';
import './CounterComponent.css'

class CounterComponent extends React.Component{

    constructor(){
        super();
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.state={
            counter:0
        }
    }

    render(){
        return(
            <div className="container">
            <div className="div-border">
                {this.state.counter}
            </div>
            <button onClick={this.increment}> Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

    increment(){
        let counter= this.state.counter;
        counter=counter+1;
        this.setState({
            counter:counter
        })
    }

    decrement(){
        let counter= this.state.counter;
        counter=counter-1;
        this.setState({
            counter:counter
        })
    }

}

export default CounterComponent;