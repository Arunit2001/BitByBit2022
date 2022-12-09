import React from 'react';

import './App.css';
import Courses from './Components/Courses';
import NavBar from './Components/NavBar';
import LecturePage from './Components/lecturePage/LecturePage';

function App() {
  return (
    <div style={{height : "100vh"}}>
      <NavBar />
      <LecturePage/>
    </div>
  );
}

export default App;
