import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useFormik, Field, Form} from 'formik';
import Carousel from 'react-bootstrap/Carousel';




function Content(){

    const validate = values => {
        const errors = {};
        
        if(!values.firstName){
            errors.firstName = "Required";
        }
        else if(values.firstName.length > 15){
            errors.firstName = "Must be 15 characters or less";
        }
        if(!values.lastName){
            errors.lastName = "Required";
        }
        else if(values.lastName.length > 20){
            errors.lastName = "Must be 20 characters or less";
        }
        if(!values.email){
            errors.email = "Required";
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Invalid email address";
        }


        return errors;
    }
    const formik = useFormik({
        

        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          picked: '',

        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    const [cardD, setcardD] = useState('Hello! Start with you name..');
    const words = ['Hello! Start with you name..', 'What best explains you?', 'Sounds good! Anything else you want to know?']


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
                    <Carousel.Item>

                        <Row>
                            <Col>
                                <h1 class = "titlething">
                                    If you're ready to start, get in touch with us!
                                </h1>
                            </Col>
                            <Col>
                                <p>
                                    01/03
                                </p>
                            </Col>
                        </Row>
                        
                        <Container>
                            
                            <form onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder= "First Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                />
                                {formik.errors.firstName ? <div class = "errors">{formik.errors.firstName}</div> : null}
                                </Col>
                                <Col>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder = "Last Name"
                                        onChange={formik.handleChange}

                                        value={formik.values.lastName}
                                    />
                                
                                {formik.errors.lastName ? <div class = "errors" >{formik.errors.lastName}</div> : null}
                            </Col>
                            </Row>
                        
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder= "Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email ? <div class = "errors" >{formik.errors.email}</div> : null}

                        
                            <button type="submit">Submit</button>
                            </form>
                        </Container>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <h1 class = "titlething">
                                    If you're ready to start, get in touch with us!
                                </h1>
                            </Col>
                            <Col>
                                <p>
                                    02/03
                                </p>
                            </Col>
                        </Row>

                        <h2>What best explains you?</h2>   
                        <input type="radio" id="html" name="fav_language" value="form"/>
                        <label for="html">Formseeker</label><br></br>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">HTML</label><br></br>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">HTML</label><br></br>                     
        
                        
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        
                     
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                   
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
            <Row>
                <p>Follow us on: </p> <img src = "facebook.png" alt = "facebook" /> <img src = "twitter.png" alt = "twitter" /> <img src = "instagram.png" alt = "instagram" />
            </Row>
        </Container>
    );
}

export default Content;

