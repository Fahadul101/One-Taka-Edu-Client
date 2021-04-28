import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DyCourse = ({dyCourse}) => {
    return (
        <div>
            <div className="col-md-4 col-sm-6 text-center">
        {
            // DyCourse.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${DyCourse.image.img}`}/>
            // :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://polar-sea-70775.herokuapp.com/${dyCourse.file}`} alt=""/>
        }
            <h4>{dyCourse.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
        </div>
    );
};

export default DyCourse;