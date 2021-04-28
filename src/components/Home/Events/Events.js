import React from 'react';
import EventDetail from '../EventDetail/EventDetail';
import './Events.css';
import workshop from '../../../image/workshop.png';
import coaching from '../../../image/coaching.png';
import intenseCare from '../../../image/intensive.jpg';

const eventsData =[
    {
        img: workshop,
        name: 'Workshop',
        time: '20 May || 21:30',
        description:'This Workshop Learning Outcome Introducing Computer.   ',
        explore: 'Find More'

    },
    {
        img: coaching,
        name: 'Coaching',
        time: '15 May || 21:30',
        description:'This Coaching Learning Outcome  Introducing Math.',
        explore: 'Find More'

    },
    {
        img: intenseCare,
        name: 'Intensive Care',
        time: '20 June || 23:30',
        description:'This Intensive Care Outcome Who did not learn properly',
        explore: 'Find More'

    }
]

const Events = () => {
    return (
        <section className="event-container">
           <div className="text-center mt-5">
              <h1>Upcoming Events</h1>
           </div>
           <div className="d-flex justify-content-center event-box">
                <div className="w-75 row mt-5">
                        {
                            eventsData.map(event =><EventDetail event={event}></EventDetail>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Events;