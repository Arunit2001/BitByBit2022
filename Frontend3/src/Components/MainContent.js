import React from "react";
import CourseDetails from "./CourseDetails";
function MainContent(){
    return (
        <div style={{height : "100%", width : "100vw", positions : "absolute", overflow : "scroll"}}>
            <CourseDetails/>
        </div>
    );
}

export default MainContent;