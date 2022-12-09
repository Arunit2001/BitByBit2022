import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LectureModule from '../Modules/LectureModule';

function Lecture() {
    const [LectureData, setLectureData] = useState(new LectureModule)
    const showLectureVideo = () =>{
        console.log('lecture video');
    }
    return ( 
        <>
            {console.log(LectureData.img)}
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


            <button onClick={this.onOpenModal}>Play Video </button>
            <Player open={this.state.open} toggleModal={this.onOpenModal} />
            <button onClick={this.downloadVideo}>Download </button>
        </>
    );
}

export default Lecture;