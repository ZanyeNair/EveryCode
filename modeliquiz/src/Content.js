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
        var rd1 = document.getElementById('job');
        var rd2 = document.getElementById('rec');
        var rd3 = document.getElementById('edu');
       
        var ele = document.getElementsByName('sel');
        var selected;
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                selected =  ele[i].value;
            
        }
        var x = document.getElementById('texting').value;
        
        alert(x);
        alert(all);
        


        
    

        if(index == 0 && formik.values.firstName !== '' && formik.values.lastName !== '' && formik.values.email !== ''){
            setAll(true);
        }
        else if(index == 1 &&selected  == "job" || selected == "rec" || selected == "edu"){
            setAll(true);

        }
        else if(index == 2 && x !== ''){
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
        else if(index === 2 && all){
            setIndex(3);
            setAllIn('');
            
        }
        else if(index === 3 && all){
            setIndex(0);
            formik.resetForm();
            document.getElementsByName('sel').value = undefined;
            document.getElementById('texting').value = '';
            rd1.checked = false;
            rd2.checked = false;
            rd3.checked = false;
            setAll(false)
        };
    }


    return (
        <Container id = "content">
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
                <Carousel class = "slides" activeIndex={index} interval={null} slide = {false} indicators = {false} controls = {false} touch = {false}>
                    <Carousel.Item>
                    

                        <Row>
                            <Col>
                                <h1 xs = {12} md = {8} class = "titlething">
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
                            <Row>
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
                                <Col>
                                <button class = "submit" onClick={handleSelect}>Submit</button>
                                </Col>
                                
                            </Row>
                            
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
                                <p class = "number">
                                    02/03
                                </p>
                            </Col>
                        </Row>

                        <h2>What best explains you?</h2>   
                        <Row>
                            <Col>
                            
                           
                        <input type="radio" id="html" name="sel" value="job" />
                        <label for="job">Jobseeker</label><br></br>
                        <input type="radio" id="html" name="sel" value="rec"/>
                        <label for="rec">Recruiter</label><br></br>
                        <input type="radio" id="html" name="sel" value="edu"/>
                        <label for="edu">Educational Institution</label><br></br> 
                        {allIn}
                        </Col>
                        <Col>
                        <button class = "submit" type="submit" onClick={handleSelect}>Submit</button>  
                        </Col>
                        </Row>                  
        
                        
                       
                    </Carousel.Item>
                    <Carousel.Item>                     
                        <Row>
                            <Col>
                                <h1 class = "titlething">
                                    If you're ready to start, get in touch with us!
                                </h1>
                            </Col>
                            <Col>
                                <p class = "number">
                                    03/03
                                </p>
                            </Col>
                        </Row>

                        <label for="texting">Jobseeker</label><br></br>
                        <input type="text" id="texting" name="canweknow"/>
                        {allIn}

                        <button class = "submit" type="submit" onClick={handleSelect}>Submit</button>

                   
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

