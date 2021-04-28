
import React, { useEffect, useState } from 'react';
import DyCourse from '../DyCourse/DyCourse';

const DyCourses = () => {
    const [dyCourses,setDyCourses] = useState([])
    useEffect( () => {
        fetch('https://polar-sea-70775.herokuapp.com/addCourses')
        .then(res => res.json())
        .then(data => setDyCourses(data))
    }, [])
    return (
        <section className="dyCourses">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Courses</h5>
                <div className="row">
                    {
                     dyCourses.map(dyCourse =><DyCourse key={dyCourse._id} dyCourse={dyCourse} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default DyCourses;