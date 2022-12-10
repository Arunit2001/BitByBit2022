import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MixcloudPlayer from 'react-player/mixcloud';
import LectureModule from '../Modules/LectureModule';

function Lecture() {
    const [LectureData, setLectureData] = useState(new LectureModule)
    const [modal, setToggleModal] = useState({
        isOpen : false,
        url:'closeup_of_cute_small_bird_6892300.mp4'
    });
    
    const showLectureVideo = () =>{
        console.log('lecture video');
        setToggleModal({isOpen: !modal.isOpen});
    }
    return ( 
        <>
            Lecture 1
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src = {LectureData.img}/>
            <Card.Body>
                <Card.Title>{LectureData.title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={showLectureVideo}>Watch</Button>
            </Card.Body>
            </Card>


            
        </>
    );
}

export default Lecture;