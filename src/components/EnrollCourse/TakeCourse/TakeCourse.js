import React from 'react';
import TakeCourseCard from '../TakeCourseCard/TakeCourseCard';
import './TakeCourse.css';

const allCourse = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Basic Math',
        time: '7 weeks',
        totalEnroll: 1000,
        price: '1 Taka'
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Web Developing 099',
        time: '4 weeks',
        totalEnroll: 2000,
        price: '1 Taka'
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Web Developing 101',
        time: '5 weeks',
        totalEnroll: 3000,
        price: '1 Taka'
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Basic English',
        time: '3 weeks',
        totalEnroll: 5000,
        price: '1 Taka'
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Social Sciencs',
        time: '3 Weeks',
        totalEnroll: 7000,
        price: '1 Taka'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Graphics Design 099',
        time: '3 Weeks',
        totalEnroll: 2000,
        price: '1 Taka'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 7,
        subject: 'Graphics Design 101',
        time: '4 Weeks',
        totalEnroll: 2400,
        price: '1 Taka'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 8,
        subject: 'Intermediate Math',
        time: '6 Weeks',
        totalEnroll: 8000,
        price: '1 Taka'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 9,
        subject: 'Intermediate English',
        time: '5 Weeks',
        totalEnroll: 1500,
        price: '1 Taka'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 10,
        subject: 'Android Development',
        time: '8 Weeks',
        totalEnroll: 1500,
        price: '1 Taka'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 11,
        subject: 'Machine Learning',
        time: '10 Weeks',
        totalEnroll: 2350,
        price: '1 Taka'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 12,
        subject: 'Cyber Security',
        time: '8 Weeks',
        totalEnroll: 2720,
        price: '1 Taka'
    }
]

const TakeCourse = ({date}) => {
    return (
        <section className="all-course">
            <h2 style={{textAlign:'center'}}>Take This Course on {date.toDateString()}</h2>
            <div className="row mb-5 mt-5 ">
                {
                    allCourse.map(all => <TakeCourseCard all={all} date={date} key={all.id}></TakeCourseCard>)
                }
            </div>
        </section>
    );
};

export default TakeCourse;