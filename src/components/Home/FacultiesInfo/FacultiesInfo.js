import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faLaptopCode,faMoneyCheck,faBookReader } from '@fortawesome/free-solid-svg-icons'

const infosData =[
    {
        title:'Computer Science',
        description:'This Is computer Science Department',
        icon:faLaptopCode,
        background: 'primary'
    },
    {
        title:'Economy',
        description:'This Is Economy Department',
        icon:faMoneyCheck,
        background: 'dark'
    },
    {
        title:'English ',
        description:'This Is English Department',
        icon:faBookReader,
        background: 'primary'
    },
]

const FacultiesInfo = () => {
    return (
       <section className="d-flex justify-content-center">
          <div className="w-75 row">
                {
                    infosData.map(info=> <InfoCard info={info}></InfoCard>)
                }
          </div>
       </section>
    );
};

export default FacultiesInfo;