import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Style/CourseDetails.css'
import { Button } from "@mui/material";
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';

function CourseDetails() {
    const [course_name, setCourseName] = useState('');
    const [base_price, setBasePrice] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [intro_video, setIntroVideo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // const Img = document.getElementById('thumbnail');
        // document.getElementById("file-id").value = Img;
        // alert(Img);
        console.log(course_name);
        console.log(base_price);
    }

    return (
        <div className="mt-5 container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 style={{padding : "10px 0 10px 0"}}>Course details</h1>
                <Box
                    
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '98%'},
                    }}
                    noValidate
                    autoComplete="off"
                    style={{padding : "10px 0 10px 0"}}>
                    <TextField id="course_name"  type="course_name" placeholder="" name="course_name" style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px"}} onChange={(e) => setCourseName(e.target.value)} label="Course name" variant="outlined" />
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
                    <TextField value={description} onChange={(e) => setDescription(e.target.value)} type="description" placeholder="" id="description" name="description" style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px"}} variant="outlined" label="Description" />
                </Box>
                {/* <label htmlFor="description">Course Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="description" placeholder="" id="description" name="description" /> */}
                {/* <label htmlFor="thumbnail">Image</label>
                <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} type="file" placeholder="" id="thumbnail" name="thumbnail" /> */}
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '98%'},
                    }}
                    noValidate
                    autoComplete="off"
                    style={{padding : "10px 0 10px 0"}}>
                    <TextField 
                        disabled="true" 
                        value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} 
                        type="thumbnail" 
                        placeholder="" 
                        id="thumbnail" 
                        name="thumbnail" 
                        style={{backgroundColor : "#fff", outline : "none", borderRadius : "5px"}} 
                        variant="outlined" 
                        label="Video thumbnail" />
                </Box>
                <Input/>
                <Button className="btn" style={{fontSize : "20px"}} type="submit">Save</Button>
            </form>
        </div>
    )
}

export default CourseDetails;