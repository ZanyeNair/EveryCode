import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';

export default function SignUp(){
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
        if(!values.age){
            errors.age = "Required";
        }
        else if(isNaN(values.age)){
            errors.age = "Must be a number";
        }
        else if(values.age <10 ){
            errors.age = "You can not be under 10 years old";
        }
        else if(values.age > 110){
            errors.age = "You can not be over 110 years old";
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          age : '',
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
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName ? <div class = "errors">{formik.errors.firstName}</div> : null}
                </Col>
                <Col>
                    <label htmlFor="lastName">Last Name</label><br/>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                
                {formik.errors.lastName ? <div class = "errors" >{formik.errors.lastName}</div> : null}
             </Col>
            </Row>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div class = "errors" >{formik.errors.email}</div> : null}

                <label htmlFor="age">Age</label>
                <input
                id="age"
                name="age"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.age}
                />
                {formik.errors.age ? <div class = "errors" >{formik.errors.age}</div> : null}

        
            <button type="submit">Submit</button>
            </form>
        </Container>
        
      );
};