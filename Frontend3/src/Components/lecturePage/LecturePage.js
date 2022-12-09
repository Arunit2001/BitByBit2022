import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer";
import LectureDoubts from "./LectureDoubts";
import LectureList from "./LectureList";
import VideoDetails from "./VideoDetails";
import "../../Style/style.css";



function LecturePage(){
    const [lecture, setUrl] = useState({});

    return (
        <div style={{height : '92vh'}}>
            <div style={{float : "left", height : "100%", width : "70%"}}>
                <div style={{height : "100%", width : "100%", overflow : "scroll"}} className="no-scrollbar-y">
                    <VideoPlayer width="100%" height="60%" url={lecture.videoUrl}/>
                    <VideoDetails width="100%" height="100px" title={lecture.title} desc={lecture.desc}/>
                    <LectureDoubts width="100%" height="100%"/>
                </div>
            </div>

            <div style={{float : "right", width : "30%", height : "100%"}}>
                <LectureList width="100%" height="100%" setUrl={setUrl}/>
            </div>
        </div>
    );
}

export default LecturePage;