import React from 'react';

const EnrollmentByShortList = ({course}) => {
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              course.map((course, index) => 
                    
                <tr>
                    <td>{course.name}</td>
                    <td>{course.service}</td>
                    <td>{course.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default EnrollmentByShortList;