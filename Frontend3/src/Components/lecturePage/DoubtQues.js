import React from "react";

function DoubtQues(props){
    return (
        <div style={{padding : "10px", width : "100%", }}>
            <div style={{width : "100%", height : "100%"}}>
                <p style={{fontSize : props.fontSize, fontStyle : props.fontSize}}>{props.text}</p>
            </div>
        </div>
    );
}

export default DoubtQues;