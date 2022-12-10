import React from "react";
import ProfilePage from "./Profile/ProfilePage";
import Login from "./Login";
import Signup from "./Signup";
import CourseDetails from "./CourseDetails";
import LecturePage from "../Components/lecturePage/LecturePage";
import Courses from "./Courses"
import Lecture from "./Lecture";
function MainContent(){
    return (
        <div style={{height : "100%", width : "100vw", positions : "absolute", overflow : "scroll"}}>
            {/* <Login/> */}
            {/* <Signup/> */}
            {/* <CourseDetails/> */}
            <LecturePage/>
            {/* <ProfilePage/> */}
        </div>
    );
}

export default MainContent;