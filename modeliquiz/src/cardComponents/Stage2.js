import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useFormik, Formik, Field, ErrorMessage } from 'formik';

function Stage2(){
    const validate = values => {
        const errors = {};
        
        if(!values.firstName){
            errors.firstName = "Required";
        }
        else if(values.firstName.length > 15){
            errors.firstName = "Must be 15 characters or less";
        }


        return errors;
    }
    const formik = useFormik({
        

        initialValues: {
          firstName: '',
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
                <input type="radio" id="html" name="fav_language" value="form"/>
                <label for="html">Formseeker</label><br></br>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">HTML</label><br></br>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">HTML</label><br></br>
                <input
                    id="firstName"
                    name="firstName"
                    type="radio"
                    placeholder= "First Name"
                    onChange={formik.handleChange}
                    value= "Formseeker"
                />
                <input
                    id="firstName"
                    name="firstName"
                    type="radio"
                    placeholder= "First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <input
                    id="firstName"
                    name="firstName"
                    type="radio"
                    placeholder= "First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName ? <div class = "errors">{formik.errors.firstName}</div> : null}
                </Col>
            </Row>

        
            <button type="submit">Submit</button>
            </form>
        </Container>
        
      );
}

export default Stage2;