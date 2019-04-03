import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person"> 
            <h4>Hi all, my name is {props.name}, I have {props.age} years of experience as a developer.</h4>
            <p onClick={props.click}>This is a just a dommy text...</p>
            <p>{props.children}</p>
            <input  onChange={props.changed}  placeholder="Enter your firstname here!" value={props.name} />
        </div>
    );
}

export default person;