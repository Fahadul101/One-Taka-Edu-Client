import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import EnrollCourseHeader from '../EnrollCourseHeader/EnrollCourseHeader';
import TakeCourse from '../TakeCourse/TakeCourse';

const EnrollCourse = () => {
    const [selectedDate , setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <EnrollCourseHeader handleDateChange={handleDateChange}></EnrollCourseHeader>
            <TakeCourse date={selectedDate}></TakeCourse>
            <Footer></Footer>
            
        </div>
    );
};

export default EnrollCourse;