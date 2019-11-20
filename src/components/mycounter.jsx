import React, { Component } from 'react';

class MyCounter extends Component {
  
    render() {
        return (
        <div class="container-fluid" style ={{marginTop:30, marginBottom:20}}>
            <h6 style ={{fontWeight:'bold'}}>{this.props.counter.name}</h6>
            <span className={this.setBadgeClasses()}>{this.formatCt()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-success btn-sm">Add Enrollment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-warning btn-sm m-3">Cancel Event</button>
        </div>
        );
    };

    setBadgeClasses() {
        let badgeclasses = "badge m-3 ";
        badgeclasses += (this.props.counter.value === 0) ? "badge-danger" : "badge-success";
        return badgeclasses;
    };

    formatCt() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
}

export default MyCounter;