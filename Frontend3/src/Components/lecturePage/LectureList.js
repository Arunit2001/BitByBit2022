import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import MixcloudPlayer from 'react-player/mixcloud';
import LectureLitsItem from "./LectureListItem";

var lectures = [];
for(var i=1; i<=10; i++){
    lectures.push({
        id : i,
        highlight : false,
        title : `Title ${i}`,
        desc : `Description ${i}`,
        thumbUrl : "http://img.youtube.com/vi/2Yn14cHfPGE/0.jpg",
        videoUrl : "https://www.youtube.com/watch?v=ysz5S6PUM-U"
    });
}

lectures[0].videoUrl = "https://www.youtube.com/watch?v=2Yn14cHfPGE";
lectures[1].videoUrl = "https://www.youtube.com/watch?v=hpJSkZc4xng&t=239s";
lectures[2].videoUrl = "https://www.youtube.com/watch?v=nxDYFDiFJjE";

function LectureList(props){

    const [curr, setDetails] = useState(lectures);
    
    return (
        <div style={{width : props.width, height : props.height, padding : "10px 0 10px 0"}}>
            <div style={{overflowY : "scroll", height : "100%"}}>
                {curr.map((item, index) => {

                    function onClick(){
                        props.setUrl(lectures[index]);
                        console.log(curr);
                        lectures.map(item1 => {
                            item1.highlight = false;
                        });
                        lectures[index].highlight = true;
                        lectures = [...lectures];
                        setDetails(lectures);
                    }
                    return (
                        <LectureLitsItem 
                        id={item.id} 
                        title={item.title} 
                        desc={item.desc} 
                        thumbUrl={item.thumbUrl}
                        highlight={item.highlight}
                        onClick={onClick}
                        key={item.id}
                        />);
                })}
            </div>
        </div>
    );
}

export default LectureList;