import React, { useState } from 'react';
import Lecture from './Lecture';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
// import Grid from 'react-bootstrap/Grid';

function Module(props) {
    const [LectureList, setLectureList] = useState([1,2,3,4]);
    const addNewLecture = () => {
        console.log('Add new Lecture');
    }
    
    return ( 
        <>  
            {/* <Grid> */}
            
            <Row className='lecture-container'>

                {LectureList.map((ele, index) => {
                    return (
                        <Col className='lecture-card' key={index}>
                        <Lecture lectureData = {ele} index={index} key = {index}/>
                        </Col>
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