import React, { useState } from "react";
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

var doubtUploadObj = {
    ques : "question"
};

function LectureDoubts(props){

    const [isDoubtUploadVisible, setVisib] = useState(false);

    return (
        <div style={{width : props.width, height : props.height, padding : "20px 20px 10px 20px"}}>
            <div style={{backgroundColor : "#fff", height : "100%", width : "100%", position : "relative"}}>
                <LectureDoubtHeading position="fixed" width="100%" height="100px" setVisib={setVisib}/>
                <div style={{width : "100%", height : "100%", overflowY : "scroll"}} className="no-scrollbar-y">
                    {isDoubtUploadVisible?<Doubt doubt={doubtUploadObj} quesUpload={true} bgColor="#000" position="sticky" top="0"/>:<></>}
                    {doubts.map((item)=>{
                        return (
                            <Doubt doubt={item} key={item.id} quesUpload={false} bgColor="#ccc"/>
                        );
                    })}

                </div>

            </div>
        </div>
    );
}

export default LectureDoubts;