import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Stage1 from './cardComponents/Stage1';
import Stage2 from './cardComponents/Stage2';
import Stage3 from './cardComponents/Stage3';
import Stage4 from './cardComponents/Stage4';
import Carousel from 'react-bootstrap/Carousel';



function Content(){

    const [cardD, setcardD] = useState('Hello! Start with you name..');
    const [i, setI] = useState(1);
    const words = ['Hello! Start with you name..', 'What best explains you?', 'Sounds good! Anything else you want to know?']
    const stages = [<Stage1 />, <Stage2 />, <Stage3 />, <Stage4 />];
    const [stage, setStage] = useState(stages[0]);


    function nextCard(){
        if(i < 3){
            setI(i+1);
            setcardD(words[i]);
            setStage(stages[i]);
        }
       

        
    }
    return (
        <Container>
            <Row>
                <Col xs = {6} md = {4}>
                    <h1 class = "qs">
                        Got Questions?
                    </h1>
                    <p>
                        We are here to Anwser your Every Question, Just fill in the Details and we will Take Care of the Rest.
                    </p>
                </Col>
                <Col xs = {12} md = {8}>
                <Carousel>
      {/* <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
                </Col>
            </Row>
            <Row>
                <p>Follow us on: </p> <img src = "facebook.png" alt = "facebook" /> <img src = "twitter.png" alt = "twitter" /> <img src = "instagram.png" alt = "instagram" />
            </Row>
        </Container>
    );
}

export default Content;



// <Card>
//                         <Card.Body>
//                             <Card.Title>
//                                 <Row>
//                                     <Col>
//                                         If you're ready to start, get in touch with us!
//                                     </Col>
//                                     <Col>
//                                         0{i} /03
//                                     </Col>
//                                 </Row>
//                             </Card.Title>
//                             <Card.Text>

//                             <Row>
//                                     <Col xs = {12} md = {8}>
//                                         {cardD}
//                                         <Row>

//                                             {stage}
                                            
//                                         </Row>
//                                     </Col>
//                                     <Col >
//                                         <button onClick={nextCard}>Next</button>
//                                     </Col>
//                                 </Row>
                                
                               
                               
//                             </Card.Text>
                           
//                         </Card.Body>
                        
//                     </Card>