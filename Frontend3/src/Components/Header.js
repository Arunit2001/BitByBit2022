import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Courses from './Courses';

function Header(props) {
    return (  
        <>
            {/* {console.log('Inside Tutor')} */}
            {/* <Nav>
                <Link to='courses'>Courses</Link>
                <Link to='profile'>Profile</Link>
            </Nav> */}
            {/* :
            <Nav>
                <Link to='courses'>Courses</Link>
                <Link to='profile'>Profile</Link>
            </Nav> */}

        {/* { */}
            {/* props.role == 'student' ? */}
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand >Product Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-bar">
                    <Link to="home" className='nav-ele'>Home</Link>
                    <Link to="profile" className='nav-ele'>Profile</Link>
                    <Link to="courses" className='nav-ele'>Courses</Link>
                    {
                        props.role == 'student' ?
                        <Link to="enrollcourses" className='nav-ele'>Enrolled Courses</Link>
                        :false
                    }   
                </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* :
            // <Navbar bg="light" expand="lg">
            //     <Container>
            //     <Navbar.Brand >Product Name</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //     <Nav className="me-auto nav-bar">
            //         <Link to="home" className='nav-ele'>Home</Link>
            //         <Link to="profile" className='nav-ele'>Profile</Link>
            //         <Link to="courses" className='nav-ele'>Courses</Link>
                    
            //     </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>
            //  */}
            

        {/* } */}
                
                   
        </>
    );
}

export default Header;
