import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import EnrollCourse from './components/EnrollCourse/EnrollCourse/EnrollCourse';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddCourse from './components/AddCourse/AddCourse';
import AllEnrollment from './components/AllEnrollment/AllEnrollment/AllEnrollment';
import AddReview from './components/AddReview/AddReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path="/login">
            <Login></Login>
          </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/allEnrollment">
            <AllEnrollment></AllEnrollment>
          </Route>
        <Route path="/Course">
          <EnrollCourse></EnrollCourse>
        </Route>
        <Route path="/addCourse">
          <AddCourse></AddCourse>
        </Route> 

        <Route path="/addReview">
          <AddReview></AddReview>
        </Route>

        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
