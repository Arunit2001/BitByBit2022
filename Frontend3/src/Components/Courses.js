import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Module from './Module'

const Courses = (props) => {
    const [moduleList, setModuleList] = useState([1,2,3,4,5]);
    const addNewModule = () => {
        console.log('Add new Module');
    }
    return (  
        <>  
            <div className='frost-effect'>


                {moduleList.map((module, index) =>{
                    return(
                        <div className='module-container' key= {index}>

                            <h3>Module Name</h3>
                        
                            <Module index = {index} role={props.role}/>
                        </div>
                    );
                })}
            </div>

            <Button 
                className="create-btn"
                onClick={addNewModule}
            >Add Module</Button>
            
        </>
    );
}

export default Courses;