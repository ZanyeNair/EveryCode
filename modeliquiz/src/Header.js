import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '/iquizuanwser.png'

function Header(){
    return (
        <Container>
            <Row>
                <Col xs = {12} md = {8}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Col>
                <Col xs = {6} md = {4}>
                    <p></p>
                </Col>

            </Row>  
        </Container>
        
    );
}

export default Header;