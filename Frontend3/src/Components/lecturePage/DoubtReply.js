import React from "react";

function DoubtReply(props){
    return (
        <div style={{padding : "10px", width : "100%"}}>
            <div style={{width : "100%", height : "100%", border : "1px solid #000", borderRadius : "5px", minHeight : "80px", padding : "10px"}}>
                <p style={{fontSize : props.fontSize, fontStyle : props.fontSize, margin : "0"}}>{props.text}</p>
            </div>
        </div>
    );
}

export default DoubtReply;