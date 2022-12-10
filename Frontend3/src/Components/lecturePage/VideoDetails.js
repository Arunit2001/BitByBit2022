import React from "react";
import Text from "../Text";


function VideoDetails(props){
    console.log(props);
    return (
        <div style={{width : props.width, height : props.height, padding : "0 20px 0 60px"}}>
            <div style={{width : "100%", height : "100%", backgroundColor : "#fff"}}>
                <Text text={props.title} fontSize="30px"/>
                <Text text={props.desc}/>
            </div>
        </div>
    );
}

export default VideoDetails;