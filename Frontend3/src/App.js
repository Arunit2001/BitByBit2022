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
import Accounts from './Components/Accounts';
import LoginMetaData from './Modules/loginMetaData';
import Module from './Components/Module';
const App = () => {
  const [loginMetaData, setLoginMetaData] = useState({});
  const [curCourse, setCurentCourse] = useState('');
  const updateLoginMetaData = async (response) =>{
    console.log('updating loginMetaData', response);
    
    // const newLoginMetaData = new LoginMetaData(response);
    setLoginMetaData(response);

  }

  const updateCourseId = (id)=>{
    setCurentCourse(id);
  }

  return (
    <>
      {/* {
     console.log('LoginMetaData: ',loginMetaData)} */}
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
      {loginMetaData.result != undefined ?
        <Routes>
          
          {console.log(loginMetaData.result.role)}
          {
            loginMetaData.result.role == 'student' ?
            <Route exact path='student' element={<Student/>} >
              {console.log("hello")}
              {console.log(loginMetaData)}
              <Route  path='courses' element={<Courses updateCourseId= {updateCourseId} loginMetaData = {loginMetaData} role={loginMetaData.result.role} />}>
              </Route>
                  <Route path='courses/modules' element={<Module curCourse={curCourse} loginMetaData = {loginMetaData} role={loginMetaData.result.role}/>} />
              <Route path='wishlist' element={<Courses loginMetaData = {loginMetaData} role={loginMetaData.result.role}/>}></Route>
              <Route path='enrollcourses' element={<EnrollCourses loginMetaData = {loginMetaData} role={loginMetaData.role}/>}></Route>
              <Route  path='profile' element={<Profile role={loginMetaData.role}/>}></Route>
              <Route path='*' element={<Error/>}/>
            </Route>
            :
            <Route exact path='tutor' element={<Tutor/>}>
              <Route path='courses' element={<Courses loginMetaData = {loginMetaData} role={loginMetaData.result.role}/>}></Route>
              <Route path='profile' element={<Profile loginMetaData = {loginMetaData} role={loginMetaData.result.role}/>}></Route>
              <Route path='*' element={<Error/>}/>
            </Route>
          }
          <Route path='*' element={<Error/>}/>
        </Routes>
        :<Accounts loginMetaData={loginMetaData} updateLoginMetaData={updateLoginMetaData}/>
      }
    </>
  );
}

export default App;
