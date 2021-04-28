import React from 'react';
import bg1 from '../../../image/bg1 (4).jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:'650px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 text">
                <h1>Your New Life <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ex libero, temporibus fugit placeat enim.</p>
                <button className="btn btn-info">Get Your Course</button>
            </div>
            <div className="col-md-6">
                <img style={{borderRadius:'10px'}} src={bg1} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;