import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function DoubtQues(props){
    return (
        <div style={{padding : "10px", width : "100%"}}>
            <div style={{width : "100%", height : "100%"}}>
                {!props.quesUpload?<p style={{fontSize : props.fontSize, fontStyle : props.fontSize, margin : "0"}}>{props.text}</p>:<></>}
                {props.quesUpload?<Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '98%'},
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" multiline maxRows={4} label="Post your doubt here" variant="outlined" />
                </Box>:<></>}
            </div>
        </div>
    );
}

export default DoubtQues;