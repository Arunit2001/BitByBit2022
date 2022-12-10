import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Courses from './Courses';

function EnrollCourses(props) {
    return ( 
        <Courses role={props.role}/>
    );
}

export default EnrollCourses;