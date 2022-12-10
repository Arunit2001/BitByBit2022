import React from "react";

function TabItem(props){
    return (
        <div style={{
            width : "100%", 
            height : "100%", 
            display : "flex", 
            alignItems : "center", 
            justifyContent : "center",
            boxShadow : `0 0 10px ${props.shadowColor}`,
            margin : "0 20px 0 20px",
            backgroundColor : props.bgColor,
        }}
        onClick={()=>{
            props.setTab(props.id);
        }}>
            <h2 style={{color : props.color}}>{props.tabName}</h2>
        </div>
    );
}

export default TabItem;