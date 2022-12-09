import React, { useState } from "react";

function LectureOptions(){
    const obj = {
        width : "80px"
    };
    const [options, setVisibility] = useState(obj);

    return (
        <div style={{float : "right", width : options.width, height : options.height, backgroundColor : "#000", borderRadius : "0 5px 5px 0"}} 
        onMouseOver={() => {setVisibility({width : "300px"})}} 
        onMouseOut={() => {setVisibility({width : "80px"})}}>

        </div>
    );
}

export default LectureOptions;