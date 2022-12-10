import React from "react";

function LectureItemDetail(props){
    return (
        <div style={{width : props.width, height : props.height}}>
            <div style={{width : "100%", height : "40%", padding : "10px"}}>
                <h5 style={{margin : "0px"}}>{props.title}</h5>
            </div>
            <div style={{width : "100%", height : "60%", padding : "10px"}}>
            <h5 style={{margin : "0px"}}>{props.desc}</h5>
            </div>
        </div>
    );
}

export default LectureItemDetail;