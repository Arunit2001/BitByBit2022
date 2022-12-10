import { Fab } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import { useNavigate } from 'react-router';


function CardComponent(props) {
    const navigate = useNavigate();
    const showModules = () =>{
        console.log('showing modules')
        navigate(`/${props.role}/courses/modules`)
        // window.location.href = "http://localhost:3000/student/";

    }
    
    return ( 
        <>
        <div className='lecture-div card-ele'>

            <Card >

                <Card.Img className = 'lecture-img' variant="top" src = {props.course.thumb} 
                onClick = {()=>{
                    console.log('play video' ,props.index)
                    
                }} 
                
                >
                </Card.Img>
                


                
                <Card.Body 
                    style={{cursor:'pointer'}}
                    
                    >
                    <Card.Title>{props.course.name}</Card.Title>
                    <Card.Text>{props.course.description}</Card.Text>
                    <Fab className='play-icon' 
                        onClick={() =>{

                            props.updateCourseId(props.course._id)
                            showModules()
                        }
                        
                        }
                    >
                    
                    <PlayArrowTwoToneIcon/>
                    </Fab>
                </Card.Body>

            </Card>
            </div>
        </>
     );
}

export default CardComponent;