import React, { Component } from 'react';
import './App.css';
import Counters from './counters';
import Navbar from './navbar';
class App extends Component {

  state = {  
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 };
 handleReset = () =>{
     const resetCounter = this.state.counters.map(c =>{
        c.value = 0
        return c;
    });
    this.setState({counters:resetCounter});
 }

 handleIncrement = counter =>{
    const counterIncrement = [...this.state.counters];
    const index = counterIncrement.indexOf(counter);
    counterIncrement[index] = {...counter};
    counterIncrement[index].value++;
    this.setState({counters:counterIncrement});
 }

 handleDelete = counterId =>{
    // console.log('Deleted', counterId);
    const counterDelete = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters:counterDelete});
 }


  render() {
    return (
      <React.Fragment>
        <Navbar
        totalCounters= {this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
