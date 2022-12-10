import React from "react";
import PersonContent from "./PersonContent";
import PersonDetail from "./PersonDetail";

function ProfilePage(){
    return (
        <div style={{width : "100vw", height : "100%"}}>
            <div style={{height : "65%", width : "100%"}}>
                <PersonDetail/>
            </div>
            <div style={{height : "90vh", width : "100%"}}>
                <PersonContent/>
            </div>
        </div>
    );
}

export default ProfilePage;