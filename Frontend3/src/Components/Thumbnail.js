import React from "react";

function Thumbnail(props){
    return (
        <div style={{width : props.width, height : props.height, padding : "10px"}}>
            <img style={{width : "100%", height : "100%", borderRadius : "5px"}} src={props.url}/>
        </div>
    );
}

export default Thumbnail;