import React from 'react';
import './CourseDetail.css';

const CourseDetail = ({course}) => {
    return (
        <div className="col-md-4 text-center course-box2">
            <img style={{height:'200px'}} src={course.img} alt=""/>
            <h3>{course.name}</h3>
            <p>Instructor: {course.teacher}</p>
            <p>Price: {course.price}</p>
            <button className="btn btn-info">{course.explore}</button>
        </div>
    );
};

export default CourseDetail;