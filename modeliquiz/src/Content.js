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
    const all = false;
    const [allIn, setAllIn] = useState('All Fields are Required');
  

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
          alert(JSON.stringify(values, null, 2));
        },
      });

    const [cardD, setcardD] = useState('Hello! Start with you name..');
    const words = ['Hello! Start with you name..', 'What best explains you?', 'Sounds good! Anything else you want to know?']

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    if(index === 1){
        if(all){
            setIndex(2);
        }
        else{
            formik.errors.allIn = "All Fields are Required";
        };

    }
   if(index === 3){
        setIndex(0);
    }
    else{
        setIndex(index+1);
    };
};


    return (
        <Container class = "slides">
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
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide = {false} indicators = {false} controls = {false} touch = {false}>
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

                            {allIn}
                            <button  onClick={handleSelect}>Submit</button>
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
                        <Row>
                            <Col>
                            
                           
                        <input type="radio" id="html" name="fav_language" value="form"/>
                        <label for="html">Jobseeker</label><br></br>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">Recruiter</label><br></br>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">Educational Institution</label><br></br> 
                        </Col>
                        <Col>
                        <button type="submit" onClick={handleSelect}>Submit</button>  
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
                                <p>
                                    03/03
                                </p>
                            </Col>
                        </Row>

                        <label for="texting">Jobseeker</label><br></br>
                        <input type="text" id="texting" name="canweknow"/>

                        <button type="submit" onClick={handleSelect}>Submit</button>

                   
                    </Carousel.Item>
                    <Carousel.Item class = "fourth">                     
                        <h1>Thank you for submitting, we're excited to chat!</h1>

                        <p>We will reach out to you soon</p>
                        <button type="submit" onClick={handleSelect}>Close</button>

                   
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
           
        </Container>
    );
}

export default Content;

