import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Error from './Error';
import Module from './Module'

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

    useEffect(() => {
         //increment this Hook
         if(props.loginMetaData != undefined){
            getCourses(props.loginMetaData);
         }
      }, []); 
    // props.loginMetaData == undefined ? console.log('No loginMetaData'): getCourses(props.loginMetaData);
    return (  
        <>
        {courseList.map((course, index) =>{
                    return(
                        <>
                        <div className='module-container' key= {index}>

                            <h3>{course.name}</h3>

                            <Module courseData={course} index = {index} role={props.role} key = {index}/>
                        </div>
                        </>
                    );
                })}
        </>
                );
            }
            
export default Courses;