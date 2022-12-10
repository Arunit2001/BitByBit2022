import React, {  } from "react";
import './App.css';
import './Style/CourseDetails.css';
import './Style/Login.css';
import './Style/Signup.css';
import './Style/Popup.css';
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div style={{height : "100%", width : "100%", position : "relative"}}>
      <div style={{height : "8vh", width : "100%", position : "fixed", top : "0", zIndex : "9999"}}>
        <NavBar/>
      </div>
      <div style={{height : "92vh", position : "fixed", top : "8vh"}}>
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
