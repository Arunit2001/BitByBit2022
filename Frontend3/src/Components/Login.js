import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Style/CourseDetails.css'
import { Button, Fab } from "@mui/material";
import FormEntry from "./FormEntry";
import LoginMetaData from "../Modules/loginMetaData";

function Login (props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const loginHandle = async (e)=>{
        e.preventDefault();
        console.log('login into the product');
        //fetch call for login
        const requestBody= {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email:email,
                password:pass
            })
        }
        // message: "Login Successfull"
        // result: {first_name: 'Arunit', student_img: 'https://upload.wikimedia.org/wikipedia/commons/thu…e.png/640px-Image_created_with_a_mobile_phone.png', id: '6393c993cfa62dd1734700c9', role: 'student'}
        // status: true
        // statusCode: 200
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImxvY2FsIjp7InBhc3N3b3JkIjoiMTIzNCJ9LCJfaWQiOiI2MzkzYzk5M2NmYTYyZGQxNzM0NzAwYzkiLCJtZXRob2QiOiJsb2NhbCIsImVtYWlsIjoiYXJ1bml0MUBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiQXJ1bml0IiwibGFzdF9uYW1lIjoiS3VtYXIiLCJjb3Vyc2UiOlsiNjM5MzcyZjM1MjlhOWFiMGFjODNmMTI0IiwiNjM5MzZjZGYzY2Y5MzEyNjIwN2RiODdhIl0sInBheW1lbnRfaGlzdG9yeSI6W10sIndpc2hsaXN0IjpbIjYzOTM3MmYzNTI5YTlhYjBhYzgzZjEyNCJdLCJfX3YiOjAsInBob25lX251bWJlciI6Ijk2NjcxOTcxNjEiLCJzdHVkZW50X2ltZyI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYi9iNi9JbWFnZV9jcmVhdGVkX3dpdGhfYV9tb2JpbGVfcGhvbmUucG5nLzY0MHB4LUltYWdlX2NyZWF0ZWRfd2l0aF9hX21vYmlsZV9waG9uZS5wbmcifSwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE2NzA2ODM4NzF9.WSL_jTd4nAKeZMgY6nZCXJTKD03AmtYdudYu4HnCG4M"
        // [[Prototype]]: Object

        try{
            const result = await fetch('http://localhost:5000/login' + '/student', requestBody);
            const response = await result.json();
            console.log('Printing Response',response);
            props.updateLoginMetaData(response);
            // await props.setLoginMetaData();
            console.log(props.loginMetaData);
            
        }
        catch(error){
            console.log(error);
        }
        
    }
    return(
    <div className="back">
        <div className="mt-5 container" style={{position : "relative", top : "100px"}}>
            <form className="form" onSubmit={loginHandle}>
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
