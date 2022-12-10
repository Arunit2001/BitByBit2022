import React, { useState } from "react";
import PaymentHistory from "./PaymentHistory";
import StudentCourseWishlist from "./StudentCourseWishlist";
import StudentEnrolledCourses from "./StudentEnrolledCourses";
import TabItem from "./TabItem";

function PersonContent(){
    const [tab, setTab] = useState(0);
    return (
        <div style={{width : "100%", height : "100%"}}>
            <div style={{width : "100%", height : "8%", display : "flex", flexDirection : "row", alignItems : "stretch"}}>
                <TabItem tabName="Enrolled Courses" bgColor={tab==0?"purple":"white"} color={tab==0?"#fff":"#000"} shadowColor={tab==0?"purple":"#777"} id="0" setTab={setTab}/>
                <TabItem tabName="Course Wishlist" bgColor={tab==1?"purple":"white"} color={tab==1?"#fff":"#000"} shadowColor={tab==1?"purple":"#777"} id="1" setTab={setTab}/>
                <TabItem tabName="Payment History" bgColor={tab==2?"purple":"white"} color={tab==2?"#fff":"#000"} shadowColor={tab==2?"purple":"#777"} id="2" setTab={setTab}/>
            </div>
            <div style={{width : "100%", height : "96%", margin : "-40px 0 0 0", backgroundColor : "#eeeeeeff"}}>
                <div style={{width : "100%", height : "100%", padding : "50px 20px 20px 20px"}}>
                    {tab==0?<StudentEnrolledCourses/>:tab==1?<StudentCourseWishlist/>:<PaymentHistory/>}
                </div>
            </div>
        </div>
    );
}

export default PersonContent;