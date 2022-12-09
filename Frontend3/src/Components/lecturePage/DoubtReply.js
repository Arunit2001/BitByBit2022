import React from "react";

function DoubtReply(props){
    return (
        <div style={{padding : "10px", width : "100%", }}>
            <div style={{width : "100%", height : "100%"}}>
                <p style={{fontSize : props.fontSize, fontStyle : props.fontSize, margin : "0"}}>{props.text}</p>
            </div>
        </div>
    );
}

export default DoubtReply;