import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import Error from './Error';
import Module from './Module'
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import CardComponent from './CardComponent';
import CourseList from './CourseList';
import { Route, Routes } from 'react-router';

const Courses = (props) => {

    const [courseList, setCourseList] = useState([]);
    const addNewModule = () => {
        console.log('Add new Module');
    }
    
    //function for getting courses related to role and id
    const getCourses = async (loginMetaData) =>{
        console.log("hi");
        console.log(props);
        console.log(loginMetaData);
        const requestBody= {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': (loginMetaData.token == undefined ? '' : loginMetaData.token),
            }
        }
        console.log('Role',props.role);
        const result = await fetch('http://localhost:5000'+`/${props.role}/courses`, requestBody)
        const response = await result.json();
        console.log('Courses', response);
        setCourseList(response.result.courses);

    }

    const showModules = () =>{

    }

    useEffect(() => {
         //increment this Hook
         if(props.loginMetaData != undefined){
            getCourses(props.loginMetaData);
         }
      }, []); 

    //   description: "Lorem Ipsum"
    //     intro: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
    //     name: "Course C1"
    //     price: "1000"
    //     thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
    //     _id: "63936cdf3cf93126207db87a"

    // props.loginMetaData == undefined ? console.log('No loginMetaData'): getCourses(props.loginMetaData);
    return (  
        <>
        <div className='course-parent'>
            <Row>
                <CourseList  updateCourseId={props.updateCourseId} role={props.loginMetaData.result.role} courseList = {courseList}/>

            </Row>
        
            
        </div>
        </>
                );
            }
            
export default Courses;