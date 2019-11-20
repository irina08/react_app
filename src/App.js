import React, { Component } from 'react';
import Courses from './components/courses';
import LstCounters from './components/lstcounters';
import './App.css';

class App extends Component {
    state = {
        counters: [
        { id: 1, value: 0, name: "React JS vs Angular" },
        { id: 2, value: 0, name: "ASP.NET Core or Node JS" },
        { id: 3, value: 0, name: "Lifecycle of React JS Components" },
        { id: 4, value: 0, name: "Comparing JavaScript Libraries/Frameworks" }

        ]
    };

    handleAddButton = counter => {
        const tempcounters = [...this.state.counters];
        const i = tempcounters.indexOf(counter);
        tempcounters[i] = {...counter};
        tempcounters[i].value++;
        this.setState({ counters: tempcounters });
    };

    handleDeleteButton = (countersId) => {
        const tempcounters = this.state.counters.filter(c => c.id !== countersId);
        this.setState( { counters: tempcounters });
    };

    handleClearCounters = () => {
        const tempcounters = this.state.counters.map(ct => {
            ct.value = 0;
            return ct;
        });
        this.setState({ counters: tempcounters })
    };

  render() {
    return (
      <React.Fragment>
      <Courses totalItems={this.state.counters.map(item => item.value).reduce((prev, next) => prev + next) }/>
      <main className="container">
        <LstCounters counters={this.state.counters} onClearCounters={this.handleClearCounters} onDelete={this.handleDeleteButton} onIncrement={this.handleAddButton} />
      </main>
      </React.Fragment>
    );
  }
}

export default App;

