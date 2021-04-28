import React from 'react';
import gCap from '../../../image/gCap.jpg';
import './About.css';

const About = () => {
    return (
        <main style={{height:'650px'}} className="row d-flex align-items-center about-container">
            <div className="col-md-6">
                <img style={{borderRadius:'10px'}} src={gCap} alt="" className="img-fluid"/>  
            </div>
            <div className="col-md-4 offset-md-1 text">
                <h1 style={{color:'dodgerblue'}}>Thousands Of <br/> courses <br/>for any <br/>type of <br/> students </h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ex libero, temporibus fugit placeat enim.</p>
                <button className="btn btn-info">Browse through Courses</button>
            </div>
        </main>
    );
};

export default About;