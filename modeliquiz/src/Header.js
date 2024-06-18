
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header(){
    return (
        <Container id = "header">
            <Row>
                <Col xs = {3} md = {3}>
                    <img class = "logo" src= "iquizuanwser.png" alt="iquizuanwser" />
                </Col>
                <Col xs = {15} md = {9}>
                <nav className = "nav">
                   
                    <a href="/features" class = "e">Features</a>
                    <a href="/solutions" class = "e">Solutions</a>
                    <a href="/pricing" class = "e">Pricing</a>
                    <a href="/about" class = "e">About Us</a>
                    <a href="/contact" class = "e">Contact Us</a>
                    <a href="/blog" class = "e">Blog</a>
                    <a href="/signin" class = "e">Sign In</a>
                    <button type = "button" class = "getStart">Get Started</button>

                </nav>
                </Col>

            </Row>  
        </Container>
        
    );
}

export default Header;