import React, { useContext, useEffect, useState } from 'react';
import EnrollmentByDate from '../EnrollmentByDate/EnrollmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'; 
import Navbar from '../../Shared/Navbar/Navbar';
import { UserContext } from '../../../App';


const containerStyle ={
    // backgroundColor:"lightGray",
    // height:"100%"
}

const Dashboard = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [course , setCourse] = useState([]);
    const handleDateChange = date =>{
        setSelectedDate(date);
    }

    useEffect(()=>{
        fetch('https://polar-sea-70775.herokuapp.com/enrollmentByDate',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify({date: selectedDate })
        })
        .then(res=>res.json())
        .then(data =>setCourse(data))
    },[selectedDate])

    return (
        <section>
            <Navbar></Navbar>
            <div style={containerStyle} className="row">
                <div className="col-md-2 sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 calender">
                    <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                        />
                </div>
                <div className="col-md-3 enrollment">
                    <EnrollmentByDate course={course}></EnrollmentByDate>
                </div>
            </div>
            
        </section>
        
    );
};

export default Dashboard;