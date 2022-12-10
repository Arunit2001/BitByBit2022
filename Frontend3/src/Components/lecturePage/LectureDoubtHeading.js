import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function createDoubt(){

}

function LectureDoubtHeading(props){

    const [isUploadVisible, setVisib] = useState(false);

    return (
        <div style={{width : props.width, height : props.height, padding : "20px 10px 10px 50px", position : "sticky", top : "0" , background : "#ccc"}}>
            <div style={{width : "100%", height : "100%", display : "table"}}>
                <div style={{display : "table-cell", verticalAlign : "middle"}}>
                        <h1 style={{margin : "0", float : "left"}}>Doubts</h1>
                        <div style={{float : "right"}}>
                            <h1 style={{float : "left", margin : "0"}}>Have a doubt?</h1>
                            <div style={{float : "right"}}>
                                {!isUploadVisible?<div style={{padding : "0 20px 0 20px", float : "left"}}>
                                    {/* create doubt*/}
                                    <Fab style={{outline : "none"}} color="secondary" aria-label="add" onClick={()=>{
                                        setVisib(true);
                                        props.setVisib(true);
                                    }}>
                                        <AddIcon fontSize="large"/>
                                    </Fab>
                                </div>:<></>}
                                {isUploadVisible?<div style={{padding : "0 20px 0 40px", display : "inline"}}>
                                    {/* upload doubt*/}
                                    <Fab style={{outline : "none"}} color="secondary" aria-label="add" onClick={()=>{
                                        setVisib(false);
                                        props.setVisib(false);
                                    }}>
                                        <CheckIcon fontSize="large"/>
                                    </Fab>
                                </div>:<></>}
                                {isUploadVisible?<div style={{padding : "0 20px 0 20px", float : "right"}}>
                                    {/* cancel doubt creation*/}
                                    <Fab style={{outline : "none"}} color="secondary" aria-label="add" onClick={()=>{
                                        setVisib(false);
                                        props.setVisib(false);
                                    }}>
                                        <DeleteIcon fontSize="large"/>
                                    </Fab>
                                </div>:<></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LectureDoubtHeading;