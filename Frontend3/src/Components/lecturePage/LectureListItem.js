import React from "react";
import Thumbnail from "../Thumbnail";
import LectureItemDetail from "./LectureItemDetail";
import LectureOptions from "./LectureOptions";

function LectureLitsItem(listItem){
    return (
        <div style={{width : "100%", padding : "10px", height : "120px"}} onClick={listItem.onClick}>
            <div style={{width : "100%", height : "100%", background : listItem.highlight?"#A7C7E7":"#eee", borderRadius : "5px", boxShadow : `${listItem.highlight?"0 2px 2px 2px #A7C7E744":"0 2px 2px 2px #ddd"}`, display : "flex"}}>
               <div style={{float : "left"}}>
                    <Thumbnail width="100px" height="100px" url={listItem.thumbUrl}/>
               </div>
               <LectureItemDetail width="100%" height="100%" title={listItem.title} desc={listItem.desc}/>
               <LectureOptions width="40px" height="100%"/>
               
            </div>
        </div>
    );
}

export default LectureLitsItem;