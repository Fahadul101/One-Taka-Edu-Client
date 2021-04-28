import React from 'react';
import './Courses.css';
import comBasic from '../../../image/computer-sciencs.png';
import engBasic from '../../../image/learn-eng.jpg';
import mathBasic from '../../../image/learnn-math.png';
import socialScience from '../../../image/learn-social-sci.png';
import webDes from '../../../image/web-des.png';
import webDev from '../../../image/web-dev.png';
import CourseDetail from '../CourseDetail/CourseDetail';

const courseData =[
    {
        img: comBasic,
        name: 'Learn Computer Basic',
        teacher: 'James Hook',
        price:'1 Taka',
        explore: 'Start Learn'

    },
    {
        img: engBasic,
        name: 'Learn English Basic',
        teacher: 'Abir Hossain',
        price:'1 Taka',
        explore: 'Start Learn'

    },
    {
        img: mathBasic,
        name: 'Learn Math Basic',
        teacher: 'Sakib Ahmed',
        price:'1 Taka',
        explore: 'Start Learn'

    },
    {
        img: socialScience,
        name: 'Learn Social Science',
        teacher: 'Mickle Cook',
        price:'1 Taka',
        explore: 'Start Learn'

    },
    {
        img:  webDes,
        name: 'Learn Graphics Design',
        teacher: 'Shah Imran',
        price:'1 Taka',
        explore: 'Start Learn'

    },
    {
        img: webDev,
        name: 'Learn Web Developing',
        teacher: 'James kook',
        price:'1 Taka',
        explore: 'Start Learn'

    }
]

const Courses = () => {
    return (
        <section className="courses-container">
           <div className="text-center mt-5">
              <h1>Our Latest Courses</h1>
           </div>
           <div className="d-flex justify-content-center course-box">
                <div className="w-75 row mt-5">
                        {
                            courseData.map(course => <CourseDetail course={course}></CourseDetail>)
                        }
                </div>
       </div>
        </section>
    );
};

export default Courses;