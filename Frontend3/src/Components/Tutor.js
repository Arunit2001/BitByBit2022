import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Courses from './Courses';
import Error from './Error';
import Header from './Header';

function Tutor() {
    return (  

        <>
            {/* <Nav>
                <Link to='/tutor/courses'>Courses</Link>
                <Link to='/tutor/profile'>Profile</Link>
            </Nav>
            <Routes>
                <Route exact path='/courses' element={<Courses/>}></Route>
                <Route exact path='/profile' element={<Error/>}></Route>
                
            </Routes> */}
            <Header role={"tutor"}/>
            Tutor
            <Outlet/>
        </>
    );
}

export default Tutor;