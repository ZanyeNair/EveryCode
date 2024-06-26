import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer(){

    function goToFace(){
        window.location.href = "https://www.facebook.com/";
      }
      function goToInsta(){
        window.location.href = "https://www.instagram.com/";
      }
      function goToLink(){
        window.location.href = "https://www.linkedin.com/";
      }
      function goToU(){
        window.location.href = "https://www.youtube.com/";
      }


    return (
        
            
    
                      
        <Container>
            <Row xs="auto">
                <Col>
                    <p>Follow us on: </p>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <img src = "facekbook.png" alt = "facebook" class = "social" onClick={goToFace}/>
                        </Col>
                        <Col>
                        <img class = "social" src = "instagram.jpeg" alt = "instagram" onClick={goToInsta}/>
                        </Col>
                        <Col>
                            <img class = "social" src = "linkedin.png" alt = "Linkdin" onClick={goToLink}/>
                        </Col>
                        <Col>
                        <img class = "social" src = "youtube.png" alt = "Youtube" onClick={goToU}/>
                        </Col>
                        
                        
                        

                    </Row>
                </Col>
            </Row>
        </Container>
           
    )
}

export default Footer;