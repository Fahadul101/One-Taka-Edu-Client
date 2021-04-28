import React from 'react';
import bgf from '../../../image/bgf.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EnrollCourseHeader = ({handleDateChange}) => {
    
    return (
        <main style={{height:'650px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 text">
                        <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                        />
            </div>
            <div className="col-md-6">
                <img style={{borderRadius:'10px'}} src={bgf} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default EnrollCourseHeader;