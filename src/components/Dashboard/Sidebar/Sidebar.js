import React from 'react';
import './Sidebar.css';
import FullHeight from "react-full-height";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faCalendarDay, faUserFriends, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div>
            <FullHeight className="section-styles sidebar col-md-2">
                    <Link to="/dashboard" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faTh} />
                        <p>Dashboard</p>
                    </Link>
                    <Link to="/enrollment" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faCalendarDay} />
                        <p>Enrollment</p>
                    </Link>
                    <Link to="/allEnrollment" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faUserFriends} />
                        <p>All Enrollment</p>
                    </Link>
                    <Link to="/addCourse" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faFileAlt} />
                        <p>Add Course</p>
                    </Link>
                    <Link to="/addReview" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faUserFriends} />
                        <p>Add Reviews</p>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faCog} />
                        <p>Settings</p>
                    </Link>
                    <Link to="" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                        <p>Log Out</p>
                    </Link>
            </FullHeight>
        </div>
    );
};

export default Sidebar;