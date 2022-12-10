import React from "react";
import PersonImageCard from "./PersonImageCard";
import PersonDetailItem from "./PersonDetailItem";

function PersonDetail(){
    return (
        <div style={{width : "100%", height : "100%", backgroundColor : "#eeeeee88"}}>
            <div style={{float : "left", width : "30%", height : "100%", padding : "70px 7% 70px 7%"}}>
                <PersonImageCard/>
            </div>
            <div style={{float : "right", width : "70%", height : "100%", padding : "50px 60px 50px 60px"}}>
                <div style={{width : "100%", height : "100%", backgroundColor : "#fff", boxShadow : "0 0 10px #ccc"}}>
                    <PersonDetailItem label="Name" value="Aditya Anand" isEditable="false"/>
                    <PersonDetailItem label="Email" value="adityanand099@gmail.com" isEditable="false"/>
                    <PersonDetailItem label="Mobile" value="+91 7050326297" isEditable="false"/>
                    <PersonDetailItem label="Institute" value="Indian Institute of Information Technology, Bhagalpur" isEditable="false"/>
                </div>
            </div>
        </div>
    );
}

export default PersonDetail;