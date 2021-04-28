import React from 'react';
import About from '../About/About';
import Courses from '../Courses/Courses';
import Events from '../Events/Events';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Management from '../Management/Management';
import Thought from '../Thought/Thought';
import DyCourses from '../DyCourses/DyCourses';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <DyCourses></DyCourses>
            <About></About>
            <Events></Events>
            <Management></Management>
            <Thought></Thought>
            <Footer></Footer>
        </div>
    );
};

export default Home;