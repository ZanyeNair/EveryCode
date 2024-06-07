import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useFormik, Formik, Field, ErrorMessage } from 'formik';


function Stage1(){
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
      return (
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
        
      );
}

export default Stage1;