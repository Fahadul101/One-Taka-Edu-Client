import React, { useState } from 'react';
import EnrollFrom from '../EnrollFrom/EnrollFrom';
import './TakeCourseCard.css';

const TakeCourseCard = ({all,date}) => {

      const [modalIsOpen,setIsOpen] = useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal(){
        setIsOpen(false);
      }
    return (
        <div className="col-md-4 mb-5 course-card">
        <div className="card p-3">
            <div className="card-body text-center">
                <h5 className="card-title text-brand">{all.subject}</h5>
                <h6>{all.time}</h6>
                <p> Total Enrolled : {all.totalEnroll}</p>
                <h6>Price: {all.price}</h6>
                <button onClick={openModal} className="btn btn-info text-uppercase">Enroll</button>
                <EnrollFrom modalIsOpen={modalIsOpen} enrollmentOn={all.subject} closeModal={closeModal} date={date}></EnrollFrom>
            </div>
        </div>
    </div>
    );
};

export default TakeCourseCard;