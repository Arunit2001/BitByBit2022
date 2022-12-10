import React from 'react';
import { Col, Container } from 'react-bootstrap';
import CardComponent from './CardComponent';

function CourseList(props) {
    return ( 
        <>  
            
            {   props.courseList.length == 0 ? <></>:
                props.courseList.map((course, index) => 
                    <Col>
                    <CardComponent updateCourseId={props.updateCourseId} role={props.role} course={course} key={index}/>
                            
                    </Col>
                
                )
                
            }
        </>
     );
}

export default CourseList;