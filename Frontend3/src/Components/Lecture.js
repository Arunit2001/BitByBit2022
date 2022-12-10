import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MixcloudPlayer from 'react-player/mixcloud';
import LectureModule from '../Modules/LectureModule';

import Fab from '@mui/material/Fab';
import playLogo from '../assests/icons8-play-button-circled-64.png';
import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';

function Lecture(props) {
    const [lectureData, setLectureData] = useState(new LectureModule)
    const [modal, setToggleModal] = useState({
        isOpen : false,
        url:'closeup_of_cute_small_bird_6892300.mp4'
    });
    
    const showLectureVideo = () =>{
        console.log('lecture video');
        setToggleModal({isOpen: !modal.isOpen});
    }

    const introVideoPopUp = () =>{
        console.log('playing intro video');
    }

    return ( 
        <>
            <div className="lecture-div">
                
                <Card >
                {/* <img src= {playLogo} className='playlogo'/> */}
                <Card.Img className = 'lecture-img' variant="top" src = {lectureData.img} 
                   onClick = {()=>{
                       console.log('play video' ,props.index)
                       
                    }} 
                     
                >
                </Card.Img>
                {/* <Card.Img src = '../public/assests/icons8-play-button-circled-64.png' 
                 /> */}
        

                
                <Card.Body 
                    style={{cursor:'pointer'}}
                    
                >
                    <Card.Title>{lectureData.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Fab className='play-icon' 
                    onClick= {lectureData.isIntroVideo ? introVideoPopUp : () => {console.log('This is an lecture video')}}>
                    
                    <PlayArrowTwoToneIcon  />
                    </Fab>
                    {/* <Button variant="primary" onClick={showLectureVideo}>Watch</Button> */}
                </Card.Body>

                </Card>


                
            </div>


            
        </>
    );
}

export default Lecture;