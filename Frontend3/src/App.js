import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import {Switch, Route, Routes, Link} from 'react-router-dom';

import './App.css';
import Courses from './Components/Courses';
import Create from './Components/Create';
import EnrollCourses from './Components/EnrollCourses';
import Error from './Components/Error';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import Student from './Components/Student';
import Tutor from './Components/Tutor';
import LoginMetaData from './Modules/loginMetaData';
const App = () => {
  const [loginMetaData, setLoginMetaData] = useState(new LoginMetaData);
  return (
    <>
      {/* <NavBar /> */}
      {/* <Nav>
        <Link to='/home'>Home</Link>
        <Link to='/courses'>Coureses</Link>
        <Link to='/profile'>Profile</Link>
      </Nav> */}
        {/* {
          loginMetaData.login == true ? 
            loginMetaData.role == 'student' ?
            <Routes>

            <Route exact path='student' element={<Student/>} >

              <Route  path='courses' element={<Courses role={loginMetaData.role}/>}></Route>
              <Route path='wishlist' element={<Courses role={loginMetaData.role}/>}></Route>
              <Route path='enrollcourses' element={<EnrollCourses role={loginMetaData.role}/>}></Route>
              <Route  path='profile' element={<Profile role={loginMetaData.role}/>}></Route>
              <Route path='*' element={<Error/>}/>
            </Route>
            </Routes>
            :
            <Routes>

              <Route exact path='tutor' element={<Tutor/>}>
                <Route path='courses' element={<Courses role={loginMetaData.role}/>}></Route>
                <Route path='profile' element={<Profile role={loginMetaData.role}/>}></Route>
                <Route path='*' element={<Error/>}/>
              </Route>    
            </Routes>
          :
          <Error/>
        } */}
      {loginMetaData.role != '' ?
        <Routes>
          
          {
            loginMetaData.role == 'student' ?
            <Route exact path='student' element={<Student/>} >

              <Route  path='courses' element={<Courses role={loginMetaData.role}/>}></Route>
              <Route path='wishlist' element={<Courses role={loginMetaData.role}/>}></Route>
              <Route path='enrollcourses' element={<EnrollCourses role={loginMetaData.role}/>}></Route>
              <Route  path='profile' element={<Profile role={loginMetaData.role}/>}></Route>
              <Route path='*' element={<Error/>}/>
            </Route>
            :
            <Route exact path='tutor' element={<Tutor/>}>
              <Route path='courses' element={<Courses role={loginMetaData.role}/>}></Route>
              <Route path='profile' element={<Profile role={loginMetaData.role}/>}></Route>
              <Route path='*' element={<Error/>}/>
            </Route>
          }
          <Route path='*' element={<Error/>}/>
        </Routes>
        :<Error/>
      }
      {/* <Courses /> */}
      {/* <Create/> */}
    </>
  );
}

export default App;
