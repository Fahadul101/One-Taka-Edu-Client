import React from 'react';
import './ManageDetail.css';

const ManageDetail = ({manage}) => {
    return (
        <div className="col-md-4 text-center manage-box2">
            <img style={{height:'200px'}} src={manage.img} alt=""/>
            <h3>{manage.name}</h3>
            <p> {manage.description}</p>
        </div>
    );
};

export default ManageDetail;