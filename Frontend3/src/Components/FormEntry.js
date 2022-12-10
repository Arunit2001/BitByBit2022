import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Style/CourseDetails.css'

function FormEntry(props) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '98%'},
            }}
            noValidate
            autoComplete="off"
            style={{padding : "10px 0 10px 0"}}>
            <TextField 
            onChange={(e) => props.setData(e.target.value)} 
            type={props.type} 
            placeholder={props.placeholder} 
            id={props.val} 
            name={props.val}
            style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px"}} 
            variant="outlined"
            label={props.label}/>
        </Box>
    );
}

export default FormEntry;
