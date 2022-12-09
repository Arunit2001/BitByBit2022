import React from "react";

function Text(props){
    return (
        <div>
            <p style={{fontSize : props.fontSize, fontStyle : props.fontSize}}>{props.text}</p>
        </div>
    );
}

export default Text;