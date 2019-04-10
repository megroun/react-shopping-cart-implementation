import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
    //  state = {  
    //     counters:[
    //         {id:1, value:0},
    //         {id:2, value:0},
    //         {id:3, value:0},
    //         {id:4, value:0}
    //     ]
    //  };
    //  handleReset = () =>{
    //      const resetCounter = this.state.counters.map(c =>{
    //         c.value = 0
    //         return c;
    //     });
    //     this.setState({counters:resetCounter});
    //     console.log("Refreshed")
    //  }

    //  handleIncrement = counter =>{
    //     const counterIncrement = [...this.state.counters];
    //     const index = counterIncrement.indexOf(counter);
    //     counterIncrement[index] = {...counter};
    //     counterIncrement[index].value++;
    //     this.setState({counters:counterIncrement});
    //  }

    //  handleDelete = counterId =>{
    //     // console.log('Deleted', counterId);
    //     const counterDelete = this.state.counters.filter(c => c.id !== counterId);
    //     this.setState({counters:counterDelete});
    //  }

     render() { 
         return (
             <div>
                 <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2" >Reset</button>
                {this.props.counters.map(counter=>(
                <Counter
                // counters={this.state.counters}
                key={counter.id} 
                onDelete={this.props.onDelete} 
                onIncrement={this.props.onIncrement} 
                counter={counter} /> 
                ))}
             </div>
           );
     }
 }
  
 export default Counters ;