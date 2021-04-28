import React, { useEffect, useState } from 'react';
import EnrollmentDataTable from '../../Dashboard/EnrollmentDataTable/EnrollmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllEnrollment = () => {
    const [allEnrollment, setAllEnrollment] = useState([]);

    useEffect(() => {
        fetch('https://polar-sea-70775.herokuapp.com/allEnrollment')
            .then(res => res.json())
            .then(data => setAllEnrollment(data))
    }, [])
    return (
        
        <div>
            <div className=" row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-center">All Enrollments</h5>
                <EnrollmentDataTable allEnrollment={allEnrollment} />
            </div>
        </div>
        </div>
    );
};

export default AllEnrollment;