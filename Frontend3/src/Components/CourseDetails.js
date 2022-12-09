import React, { useState } from "react";
import '../Style/CourseDetails.css'

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
                <label htmlFor="course_name">Course Name</label>
                <input value={course_name} onChange={(e) => setCourseName(e.target.value)} type="course_name" placeholder="" id="course_name" name="course_name" />
                <label htmlFor="base_price">Base Price</label>
                <input value={base_price} onChange={(e) => setBasePrice(e.target.value)} type="base_price" placeholder="" id="base_price" name="base_price" />
                <label htmlFor="description">Course Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="description" placeholder="" id="description" name="description" />
                <label htmlFor="thumbnail">Image</label>
                <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} type="file" placeholder="" id="thumbnail" name="thumbnail" />
                <button className="btn" type="submit">Save</button>
            </form>
        </div>
    )
}

export default CourseDetails;