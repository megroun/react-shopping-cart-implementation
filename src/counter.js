import React, { Component } from 'react';
// import Counter from './counters';

class Counter extends Component {
    // state={
    //   count: 0 
    // // value: this.props.value
    // };
    // handleIncrement = () =>{
    //     this.setState({count: this.state.count + 1})
    //     // this.setState({value: this.state.value + 1})
    // };
    render() { 
        return ( 
           <div>
            <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
           {/* <button onClick={this.handleIncrement} className="btn btn-primary">Increment</button> */}
           <button onClick={() => this.props.onIncrement (this.props.counter)} className="btn btn-primary">Increment</button>
           <button onClick={() => this.props.onDelete (this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
           
           </div> 
         );
    }
    getBadgeclasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount (){
        const {value} = this.props.counter;
        return value === 0 ? <span>Zero</span> : value;
    }
}
 
export default Counter;