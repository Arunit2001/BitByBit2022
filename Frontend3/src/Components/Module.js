import React, { useEffect, useState } from 'react';
import Lecture from './Lecture';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
// import Grid from 'react-bootstrap/Grid';

function Module(props) {
    const [ModuleList, setModuleList] = useState([]);
    const addNewLecture = () => {
        console.log('Add new Lecture');
    }
    
    const getModules= async() => {
        console.log('Fetching Lectures');
        const requestBody= {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'autherization':props.loginMetaData.token
            },
            body:JSON.stringify({
                courseId:props.curCourse
            })
        }
        // message: "Login Successfull"
        // result: {first_name: 'Arunit', student_img: 'https://upload.wikimedia.org/wikipedia/commons/thu…e.png/640px-Image_created_with_a_mobile_phone.png', id: '6393c993cfa62dd1734700c9', role: 'student'}
        // status: true
        // statusCode: 200
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImxvY2FsIjp7InBhc3N3b3JkIjoiMTIzNCJ9LCJfaWQiOiI2MzkzYzk5M2NmYTYyZGQxNzM0NzAwYzkiLCJtZXRob2QiOiJsb2NhbCIsImVtYWlsIjoiYXJ1bml0MUBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiQXJ1bml0IiwibGFzdF9uYW1lIjoiS3VtYXIiLCJjb3Vyc2UiOlsiNjM5MzcyZjM1MjlhOWFiMGFjODNmMTI0IiwiNjM5MzZjZGYzY2Y5MzEyNjIwN2RiODdhIl0sInBheW1lbnRfaGlzdG9yeSI6W10sIndpc2hsaXN0IjpbIjYzOTM3MmYzNTI5YTlhYjBhYzgzZjEyNCJdLCJfX3YiOjAsInBob25lX251bWJlciI6Ijk2NjcxOTcxNjEiLCJzdHVkZW50X2ltZyI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYi9iNi9JbWFnZV9jcmVhdGVkX3dpdGhfYV9tb2JpbGVfcGhvbmUucG5nLzY0MHB4LUltYWdlX2NyZWF0ZWRfd2l0aF9hX21vYmlsZV9waG9uZS5wbmcifSwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE2NzA2ODM4NzF9.WSL_jTd4nAKeZMgY6nZCXJTKD03AmtYdudYu4HnCG4M"
        // [[Prototype]]: Object

        try{
            const result = await fetch('http://localhost:5000/login' + '/student/modules', requestBody);
            const response = await result.json();
            console.log('Printing Response',response);
            // props.updateLoginMetaData(response);
            // await props.setLoginMetaData();
            console.log(response);
            
        }
        catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        //increment this Hook
        if(props.loginMetaData != undefined){
           getModules(props.loginMetaData);
        }
     }, []);


    return ( 
        <>  
            {console.log('courseID',props.curCourse)}
            {/* <Grid> */}
            {/* {console.log(loginMetaData)} */}
            <Row className='lecture-container'>
                
                {ModuleList.map((ele, index) => {
                    return (
                    <>
                        <h2>
                            {`Module ${index+1} : ${ele.name}`}
                        </h2>
                        {ele.lectures.map((lec, idx) => 
                            
                            <Col className='lecture-card' key={idx}>
                                
                                <Lecture lectureData = {lec} modId={ele._id} key = {idx}/>
                                
                            </Col>

                        )}
                    </>
                    );
                    
                })}

            </Row>
            {
                props.role == 'student'? true:

                <Button 
                    className="add-btn"
                    onClick={addNewLecture}
                >Add Lecture</Button>
            }
            {/* </Grid> */}
        </>
     );
}

export default Module;