import React from 'react';
import FacultiesInfo from '../FacultiesInfo/FacultiesInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <FacultiesInfo></FacultiesInfo>
        </div>
    );
};

export default Header;