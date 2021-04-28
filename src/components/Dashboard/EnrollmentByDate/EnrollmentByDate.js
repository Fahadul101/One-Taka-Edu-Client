import React from 'react';
import EnrollmentByShortList from '../EnrollmentByShortList/EnrollmentByShortList';

const EnrollmentByDate = ({course}) => {
    console.log(course);
    return (
        <div>
            <h1>Enrollments</h1>
            {
                course.length ?
                 <EnrollmentByShortList course={course} ></EnrollmentByShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Enrollments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default EnrollmentByDate;