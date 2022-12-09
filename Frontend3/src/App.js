import React, { useState } from "react";
// import React from 'react';
import './App.css';
import Courses from './Components/Courses';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Popup from "./Components/Popup";
import CourseDetails  from "./Components/CourseDetails";
import './Style/CourseDetails.css'
import './Style/Login.css'
import './Style/Signup.css';
import './Style/Popup.css'


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    //   <div className="Form">
    //   {
    //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
    //   } 
    //  </div>
    <>
      <CourseDetails />
    </>
  );
}

export default App;
