import React from "react";
import Card from '@mui/material/Card';
import { Avatar } from "@mui/material";

function PersonImageCard(){
    return (
        <div style={{height : "100%", width : "100%", boxShadow : "0 0 10px #ccc", backgroundColor : "#fff"}}>
            <div style={{width : "100%", height : "100%", borderRadius : "10px"}}>
                <div style={{height : "65%", width : "100%", display : "flex", justifyContent : "center", alignItems : "center"}}>
                    <img style={{height : "150px", width : "150px", borderRadius : "50%", border : "none", textAlign : "center", objectFit : "cover"}} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                </div>
                <div style={{height : "35%", width : "100%", display : "block", backgroundColor : "#4285F4", display : "flex", alignItems : "center", justifyContent : "center"}}>
                    <div style={{width : "80%"}}>
                        <h3 style={{textAlign : "center", color : "white"}}>Aditya Anand</h3>    
                        <h6 style={{textAlign : "center", color : "white"}}>Indian Institue of Information Technology, Bhagalpur</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonImageCard;