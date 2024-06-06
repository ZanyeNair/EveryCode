import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header(){
    return (
        <Container>
            <Row>
                <Col xs = {6} md = {4}>
                    <img class = "logo" src= "iquizuanwser.png" alt="iquizuanwser" />
                </Col>
                <Col xs = {12} md = {8}>
                    <p></p>
                </Col>

            </Row>  
        </Container>
        
    );
}

export default Header;