import React from "react";
import DoubtQues from "./DoubtQues";
import DoubtReply from "./DoubtReply";

function Doubt(props){
    return (
        <div style={{width : "100%", padding : "20px", position : props.position, top : props.top, backgroundColor : props.bgColor}}>
            <div style={{width : "100%", backgroundColor : "#fff", borderRadius : "5px"}}>
                <DoubtQues text={props.doubt.ques} quesUpload={props.quesUpload}/>
                {props.quesUpload?<></>:<DoubtReply text={props.doubt.sol}/>}
            </div>
        </div>
    );
}

export default Doubt;