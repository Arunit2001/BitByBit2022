import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer";
import LectureDoubts from "./LectureDoubts";
import LectureList from "./LectureList";
import VideoDetails from "./VideoDetails";
import "../../Style/style.css";



function LecturePage(){
    const [lecture, setUrl] = useState({
        id : 1,
        highlight : false,
        title : `Title ${1}`,
        desc : `Description ${1}`,
        thumbUrl : "http://img.youtube.com/vi/2Yn14cHfPGE/0.jpg",
        videoUrl : "https://www.youtube.com/watch?v=ysz5S6PUM-U"
    });

    return (
        <div style={{height : '100%', width : "100%"}}>
            <div style={{float : "left", height : "100%", width : "70%"}}>
                <div style={{height : "100%", width : "100%", overflow : "scroll", padding: "0 10px 0 10px"}} className="no-scrollbar-y">
                    <VideoPlayer width="100%" height="70%" url={lecture.videoUrl}/>
                    <VideoDetails width="100%" height="90px" title={lecture.title} desc={lecture.desc}/>
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