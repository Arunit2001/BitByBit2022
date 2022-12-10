import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Style/CourseDetails.css'
import { Button, Fab } from "@mui/material";
import FormEntry from "./FormEntry";

function Signup(props) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [institute, setInstitute] = useState('');
    const [pass, setPass] = useState('');
    // const [number, setNumber] = useState('');
    // const [institute, setInstitute] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(first_name);
        console.log(last_name);
        console.log(pass);
    }
    return (
        <div className="back">
            <div className="mt-5 container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1 style={{padding : "10px 0 10px 0"}}>Sign Up</h1>
                    <FormEntry label="First name" placeholder="John" type="text" val="first_name" setData={setFirstName}/>
                    <FormEntry label="Last name" placeholder="Wick" type="text" val="last_name" setData={setLastName}/>
                    <FormEntry label="Email" placeholder="example@gmail.com" type="text" val="email" setData={setEmail}/>
                    <FormEntry label="Phone no." placeholder="9837472662" type="text" val="mobile" setData={setMobile}/>
                    <FormEntry label="Institute" placeholder="Indian Institute of Information Technology, Bhagalpur" type="text" val="institute" setData={setInstitute}/>
                    <FormEntry label="Password" placeholder="***********" type="password" val="pass" setData={setPass}/>
                    <Button style={{fontSize : "20px", padding : "20px 0 10px 0", outline : "none", fontWeight : "bold", color : "orange"}} type="submit">Sign Up</Button>
                </form>
                <Button className="link-btn" style={{outline : "none"}} onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</Button>
            </div>
        </div>
        );
}
export default Signup;
