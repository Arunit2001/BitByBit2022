import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Style/CourseDetails.css'
import { Button, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

var file;

function CourseDetails() {
    const [course_name, setCourseName] = useState('');
    const [base_price, setBasePrice] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [intro_video, setIntroVideo] = useState('');

    function importFile(props) {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = props?"image/*":"video/*";
        input.onchange = _ => {
          // you can use this method to get file and perform respective operations
                  file =   Array.from(input.files);
                  console.log(file[0].name);
                  console.log(props);
                  props?setThumbnail(file[0]):setIntroVideo(file[0]);
              };
        input.click();
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const Img = document.getElementById('thumbnail');
        // document.getElementById("file-id").value = Img;
        // alert(Img);
        console.log(course_name);
        console.log(base_price);
        console.log(description);
        console.log(thumbnail.name);
        console.log(intro_video.name);
    }

    return (
        <div className="back">
            <div className="mt-5 container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1 style={{padding : "10px 0 10px 0"}}>Course details</h1>
                    <Box
                        
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '98%', color : "#000"},
                        }}
                        noValidate
                        autoComplete="off"
                        style={{padding : "10px 0 10px 0", color : "#000"}}>
                        <TextField id="course_name"  type="course_name" placeholder="" name="course_name" style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px", color : "#000"}} onChange={(e) => setCourseName(e.target.value)} label="Course name" variant="outlined" />
                    </Box>
                    {/* <label htmlFor="course_name">Course Name</label>
                    <input value={course_name} onChange={(e) => setCourseName(e.target.value)} type="course_name" placeholder="" id="course_name" name="course_name" /> */}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '98%'},
                        }}
                        noValidate
                        autoComplete="off"
                        style={{padding : "10px 0 10px 0"}}>
                        <TextField onChange={(e) => setBasePrice(e.target.value)} type="base_price" placeholder="" id="base_price" name="base_price" style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px"}} variant="outlined" label="Base price" />
                    </Box>
                    {/* <label htmlFor="base_price">Base Price</label>
                    <input value={base_price} onChange={(e) => setBasePrice(e.target.value)} type="base_price" placeholder="" id="base_price" name="base_price" /> */}
                    
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '98%'},
                        }}
                        noValidate
                        autoComplete="off"
                        style={{padding : "10px 0 10px 0"}}>
                        <TextField value={description} onChange={(e) => setDescription(e.target.value)} type="description" multiline rows={4} placeholder="" id="description" name="description" style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px", color : "#000"}} variant="outlined" label="Description" />
                    </Box>
                    {/* <label htmlFor="description">Course Description</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="description" placeholder="" id="description" name="description" /> */}
                    {/* <label htmlFor="thumbnail">Image</label>
                    <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} type="file" placeholder="" id="thumbnail" name="thumbnail" /> */}
                    <div style={{width : "100%", display : "table"}}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%'},
                            }}
                            noValidate
                            autoComplete="off"
                            style={{padding : "10px 10px 10px 0"}}>
                            <TextField 
                                value={thumbnail.name}  
                                type="thumbnail" 
                                placeholder="" 
                                id="thumbnail" 
                                name="thumbnail" 
                                style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px"}} 
                                variant="outlined" 
                                label="Thumbnail" />
                        </Box>
                        <div style={{outline : "none", display : "table-cell", verticalAlign : "middle"}}>
                            <Fab style={{outline : "none"}} color="primary" aria-label="add" onClick={() => {
                                importFile(true);
                            }}>
                            <AddIcon fontSize="large"/>
                            </Fab>
                        </div>
                    </div>
                    <div style={{width : "100%", display : "table"}}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%'},
                            }}
                            noValidate
                            autoComplete="off"
                            style={{padding : "10px 10px 10px 0", color : "#000"}}>
                            <TextField 
                                value={intro_video.name} 
                                type="intro_video" 
                                placeholder="" 
                                id="intro_video" 
                                name="intro_video" 
                                style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px", color : "#000"}} 
                                variant="outlined" 
                                label="Video file" 
                                className="thumb"/>
                        </Box>
                        <div style={{outline : "none", display : "table-cell", verticalAlign : "middle"}}>
                            <Fab  style={{outline : "none"}} color="primary" aria-label="add" onClick={() => {
                                importFile(false);
                            }}>
                            <AddIcon fontSize="large"/>
                            </Fab>
                        </div>
                    </div>
                    <Button style={{fontSize : "25px", padding : "20px 0 10px 0", outline : "none", fontWeight : "bold", color : "orange"}} type="submit">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default CourseDetails;