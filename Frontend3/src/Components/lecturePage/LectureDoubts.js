import React from "react";
import Doubt from "./Doubt";
import "../../Style/style.css";
import LectureDoubtHeading from "./LectureDoubtHeading";

var doubts = [];

for(var i=1; i<=10; i++){
    doubts.push({
        id : i,
        ques : `Question ${i}`,
        sol : `Solution ${i}`
    });
}

function LectureDoubts(props){
    return (
        <div style={{width : props.width, height : props.height, padding : "20px 20px 10px 20px"}}>
            <div style={{backgroundColor : "#ccc", height : "100%", width : "100%", overflowY : "scroll"}} className="no-scrollbar-y">
                <LectureDoubtHeading width="100%" height="100px"/>
                {doubts.map((item)=>{
                    return (
                        <Doubt doubt={item} key={item.id}/>
                    );
                })}

            </div>
        </div>
    );
}

export default LectureDoubts;