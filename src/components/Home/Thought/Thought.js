import React from 'react';
import './Thought.css';
import rv1 from '../../../image/rv1.jpg';
import rv2 from '../../../image/rv2.jpg';
import rv3 from '../../../image/rv3.jpg';
import ThoughtDetail from '../ThoughtDetail/ThoughtDetail';

const thoughtData =[
    {
        img: rv1,
        name: 'Martin Salah',
        time: 'Student(2014-2016)',
        description:'I have changed my life , I improve myself and develop skills. '
       

    },
    {
        img: rv2,
        name: 'James Hok',
        time: 'Student(2017-2019)',
        description:'I have changed my life , I improve myself and develop skills. '


    },
    {
        img: rv3,
        name: 'Moeen Ali',
        time: 'student(2015-2017)',
        description:'I have changed my life , I improve myself and develop skills. '

    }
]

const Thought = () => {
    return (
        <section className="thought-container">
           <div className="text-center mt-5">
              <h1>Thoughts From Our Students</h1>
           </div>
           <div className="d-flex justify-content-center thought-box">
                <div className="w-75 row mt-5">
                        {
                            thoughtData.map(thought =><ThoughtDetail thought={thought}></ThoughtDetail>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Thought;