import React, { Component } from 'react';
import MyCounter from './mycounter';

class LstCounters extends Component {

    render() {
        return (<div>
            { this.props.counters.map(counter => 
            (<MyCounter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} 
			/>)) }
			<button className="btn btn-primary btn-sm m-3" onClick={this.props.onClearCounters}>Clear Counters</button>
        </div>)
    }
}

export default LstCounters;