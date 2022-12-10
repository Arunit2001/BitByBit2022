import React from "react";
import ReactPlayer from 'react-player';
import "../Style/style.css";

function VideoPlayer(props){
    return (
        <div style={{padding : "20px", height : props.height, width : props.width}}>
            <ReactPlayer width="100%" height="100%" url={props.url} />
        </div>
    );
}

export default VideoPlayer;