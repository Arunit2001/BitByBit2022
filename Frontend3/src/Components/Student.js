import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Student() {
    return ( 
        <>
            <Header role={"student"}/>
            Student
            <Outlet/>
        </>
    );
}

export default Student;