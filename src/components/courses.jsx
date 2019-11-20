import React from 'react';

const Courses = (props) => {
    return (<nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="#">
        <span style ={{fontWeight:'bold'}}>Computer Network Information
        <br></br>Technologies courses</span>
        <br></br>
        Total of Enrollments:
        <span className="badge badge-success">{props.totalItems}</span>
    </a>
</nav>);
};

export default Courses;