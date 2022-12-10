import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Style/CourseDetails.css'
import { Button, Fab } from "@mui/material";
import FormEntry from "./FormEntry";

function Login(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
    <div className="back">
        <div className="mt-5 container" style={{position : "relative", top : "50px"}}>
            <form className="form" onSubmit={handleSubmit}>
                <h1 style={{padding : "10px 0 10px 0"}}>Login</h1>
                <FormEntry label="Email" type="email" placeholder="example@gmail.com" val="email" setData={setEmail}/>
                <FormEntry label="Password" type="password" placeholder="********" val="pass" setData={setPass}/>
                <Button style={{fontSize : "20px", padding : "20px 0 10px 0", outline : "none", fontWeight : "bold", color : "orange"}} type="submit">Log In</Button>
            </form>
            <Button style={{outline : "none", textDecoration : "underline", color : "#000"}} onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</Button>
        </div>
    </div>
    )
}

export default Login;
