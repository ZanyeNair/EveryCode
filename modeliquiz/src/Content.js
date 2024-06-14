import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useFormik, Field, Form} from 'formik';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';





function Content(){
    const [all, setAll] = useState(false);
    const [allIn, setAllIn] = useState('');
  

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
          

        },
        validate,
        onSubmit: values => {
          
        },
      });

    const [cardD, setcardD] = useState('Hello! Start with you name..');
    const words = ['Hello! Start with you name..', 'What best explains you?', 'Sounds good! Anything else you want to know?']

    const [index, setIndex] = useState(0);

    function handleSelect(){
       
    

        if(index == 0 && formik.values.firstName !== '' && formik.values.lastName !== '' && formik.values.email !== ''){
            setAll(true);
        }
        else if(index == 1 &&document.getElementById('job').checked || document.getElementById('rec').checked || document.getElementById('edu').checked == "edu"){
            setAll(true);

        }

        
        else if(index == 2 && document.getElementById('texting').value !== ''){
            setAll(true);
        }
        
        else{
            setAllIn('All Fields are Required');
        };
       
        
        if(index === 0 && all){
            setIndex(1);
            setAll(false);
            setAllIn('');
            
        }
        else if(index === 1 && all){
            setIndex(2);
            setAll(false);
            setAllIn('');
            
        }
        else if(index === 2 && document.getElementById('texting').value !== ''){
            setIndex(3);
            setAllIn('');
           
        }
        else if(index === 3 && all){
            setIndex(0);
            formik.resetForm();
            document.getElementsByName('sel').value = undefined;
            document.getElementById('texting').value = '';
            document.getElementById('job').checked = false;
            document.getElementById('rec').checked = false;
            document.getElementById('edu').checked = false;
            setAll(false)
        };
    }


    return (
        <Container id = "content">
            <Row>
                <Col>
                    <h1 class = "qs">
                        Got Questions?
                    </h1>
                    <p>
                        We are here to Anwser your Every Question, Just fill in the Details and we will Take Care of the Rest.
                    </p>
                </Col>
                <Col >
                <Carousel class = "slides" activeIndex={index} interval={null} slide = {false} indicators = {false} controls = {false} touch = {false}>
                    <Carousel.Item>
                    

                        <Row>
                            <Col xs = {12} md = {8}>
                                <h1 class = "titlething">
                                    If you're ready to start, get in touch with us!
                                </h1>
                            </Col>
                            <Col xs = {6} md = {4}>
                                <p class = "number">
                                    01/03
                                </p>
                            </Col>
                        </Row>
                        
                        <Container>
                            <Row>
                                
                                <form onSubmit={formik.handleSubmit}>
                                    <Row>
                                        <Col md={8}>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                placeholder= "First Name"
                                                onChange={formik.handleChange}
                                                value={formik.values.firstName}
                                            />
                                            
                                            
                                                <input
                                                    id="lastName"
                                                    name="lastName"
                                                    type="text"
                                                    placeholder = "Last Name"
                                                    onChange={formik.handleChange}

                                                    value={formik.values.lastName}
                                                />
                                            
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md = {4}>
                                            {formik.errors.firstName ? <div class = "errors">{formik.errors.firstName}</div> : null}
                                        </Col>
                                        <Col md = {4}>
                                            {formik.errors.lastName ? <div class = "errors" >{formik.errors.lastName}</div> : null}
                                        </Col>

                                    </Row>
                                    <Row >
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder= "Email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        {formik.errors.email ? <div class = "errors" >{formik.errors.email}</div> : null}
                                        
                                    </Row>
                                
                                    <Row>
                                        <Col>
                                            {allIn}
                                        </Col>
                                        <Col md = {{span: 3, offset: 9}}>
                                        <button class = "submit" onClick={handleSelect}>Next</button>
                                        </Col>
                                    </Row>
                                </form>
                                        
                            </Row>
                                
                                
                                
                           
                        </Container>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <Row>
                            <Col xs = {12} md = {8}>
                                <h1 class = "titlething">
                                We want to get to know you
                                </h1>
                            </Col>
                            <Col xs = {6} md = {4}>
                                <p class = "number">
                                    02/03
                                </p>
                            </Col>
                        </Row>
                        <h2>What best explains you?</h2>   
                        <Row >
                            <Col md = {3}>                       
                                <input type="radio" id="job" name="sel" value="job" class = "radio"/>
                                <label  class = "label" for="job">Jobseeker</label><br></br>
                                                              
                            </Col>
                            <Col md = {3}>
                                <input type="radio" id="rec" name="sel" value="radio"class = "radio"/>
                                <label class = "label" for="rec">Recruiter</label><br></br>
                            </Col>
                            <Col md = {3}>
                                <input type="radio" id="edu" name="sel" value="radio"class = "radio"/>
                                <label  class = "label" for="edu">Educational Institution</label><br></br>
                            </Col>
                           
                        </Row>
                        <Row>
                            <Col>
                                {allIn}
                            </Col>
                            <Col md = {{span: 3, offset: 9}}>
                            <button class = "submit" onClick={handleSelect}>Next</button>
                            </Col>
                        </Row>                  
        
                        
                       
                    </Carousel.Item>
                    <Carousel.Item>                     
                         <Row>
                            <Col xs = {12} md = {8}>
                                <h1 class = "titlething">
                                    We want to get to know you
                                </h1>
                            </Col>
                            <Col xs = {6} md = {4}>
                                <p class = "number">
                                    03/03
                                </p>
                            </Col>
                        </Row>
                    
                        <p>Sounds good! Anything else you want to know?</p>
                        <Row >
                            <input type="text" id="texting" name="canweknow" class = "bigText"/>
                        </Row>
                        
                        <br/>
                        <Row>
                            <Col>
                                {allIn}
                            </Col>
                            <Col md = {{span: 3, offset: 9}}>
                            <button class = "submit" onClick={handleSelect}>Next</button>
                            </Col>
                        </Row> 

                   
                    </Carousel.Item>
                    <Carousel.Item class = "fourth">                     
                        <h1>Thank you for submitting, we're excited to chat!</h1>

                        <p>We will reach out to you soon</p>
                        <button class = "submit" type="submit" onClick={handleSelect}>Close</button>

                   
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
           
        </Container>
    );
}

export default Content;

