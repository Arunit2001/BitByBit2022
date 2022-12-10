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
import LecturePage from "./Components/lecturePage/LecturePage";
import Accounts from "./Components/Accounts";

function App() {
  return (
    <>
      <CourseDetails/>
    </>
  );
}

export default App;
