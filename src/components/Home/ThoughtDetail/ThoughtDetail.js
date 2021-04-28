import React from 'react';
import './ThoughtDetail.css';

const ThoughtDetail = ({thought}) => {
    return (
        <div className="col-md-4 text-center thought-box2">
            <img style={{height:'200px'}} src={thought.img} alt=""/>
            <h3>{thought.name}</h3>
            <p> {thought.time}</p>
            <small>{thought.description}</small>
        </div>
    );
};

export default ThoughtDetail;