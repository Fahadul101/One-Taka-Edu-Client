import React from 'react';
import './Management.css';
import rakib from '../../../image/Rakibul.jpg';
import Imran from '../../../image/shah imran.jpg';
import abir from '../../../image/Abir.jpg';
import ManageDetail from '../ManageDetail/ManageDetail';


const manageData =[
    {
        img: rakib,
        name: 'Rakibul Huda',
        description:'Assistant Manager. '

    },
    {
        img: Imran,
        name: 'Shah Imran',
        description:'Assistant Manager.'
       

    },
    {
        img:abir ,
        name: 'Abir Hossain',
        description:'Assistant Manager.'
        

    }
]

const Management = () => {
    return (
        <section className="manage-container">
           <div className="text-center mt-5">
              <h1>Management</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis architecto rem veritatis dignissimos fuga!</p>
           </div>
           <div className="d-flex justify-content-center manage-box">
                <div className="w-75 row mt-5">
                        {
                            manageData.map(manage =><ManageDetail manage={manage}></ManageDetail>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Management;