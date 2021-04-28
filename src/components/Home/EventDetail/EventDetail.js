import React from 'react';
import './EventDetail.css';

const EventDetail = ({event}) => {
    return (
        <div className="col-md-4 text-center event-box2">
            <img style={{height:'200px'}} src={event.img} alt=""/>
            <h3>{event.name}</h3>
            <p> {event.time}</p>
            <small>{event.description}</small>
            {/* <button id="button" className="btn btn-info">{event.explore}</button> */}
        </div>
    );
};

export default EventDetail;