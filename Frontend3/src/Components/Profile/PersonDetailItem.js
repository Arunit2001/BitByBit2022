import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function PersonDetailItem(props){
    const [isEditable, setEditable] = useState(!props.isEditable);
    const [value, setValue] = useState(props.value);
    return (
        <div style={{width : "100%", height : "25%", padding : "15px 15px 15px 30px"}}>
            <div style={{width : "100%", height : "100%", display : "flex", alignItems : "center"}}>
            <TextField
                disabled = {!isEditable}
                id="outlined-disabled"
                label={props.label}
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value);
                }}
                style={{width : "100%", color : "#000", backgroundColor : !isEditable?"#eeeeee55":"#fff", position : "relative", zIndex : "0"}}
                sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                  }}
                />
                <Button style={{backgroundColor : "#fff", outline : "none", borderRadius : "50%", width : "62px" , height : "62px", margin : "10px"}} onClick={()=>{setEditable(!isEditable)}}>{isEditable?<CheckIcon/>:<EditIcon/>}</Button>
            </div>
        </div>
    );
}

export default PersonDetailItem;