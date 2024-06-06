import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';




function Form(){

    const [inputValName , setInputValName] = useState("");
    const [inputValAge , setInputValAge] = useState("");
    const [errorN, setErrorN] = useState("This field is required.");
    const [errorA, setErrorA] = useState("This field is required.");
    const [email, setEmail] = useState('');
    const [error, setError] = useState('This field is required.');

    const handleInputChangeName = (e) => {
        const value = e.target.value;
        setInputValName(value);
    

        if (!value.trim()) {
            setErrorN('This field is required.');
        } else {
            setErrorN('');
        }
    };
    const handleInputChangeAge = (e) => {
        const value = e.target.value;
        setInputValAge(value);
    

        if (!value.trim()) {
            setErrorA('This field is required.');
        } else {
            setErrorA('');
        }
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };

    const EmailValidationForm = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value.trim()) {
            setError('This field is required.');
        } else if (!isEmailValid(value)) {
            setError('Invalid email.');
        } else {
            setError('');
        }
    }
      
      
    
    



  return(
    <Container>
        <Row>
            <h1>Interview Signup Form</h1>
        </Row>
        
        <form class="btn btn-lg m-4 text-light gradient-form1">
            <Row>
                <Col>
                <label>
                    Name:
                    <input class="form-control" type="text"  onChange={handleInputChangeName} />
                    {errorN && <p>{errorN}</p>}
                    
                </label>
                </Col>
                <Col>
                <label>
                Age:
                    <input class="form-control"  type="number"  onChange={handleInputChangeAge} />
                    {errorA && <p>{errorA}</p>}
                </label>
                </Col>
            </Row>
            <label>
                Email:
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={EmailValidationForm} />
                {error && <p >{error}</p>}
            </label>
            <label>
                Resume:
                <input class="form-control" type="file" />
            </label>
            <label>
                Week of interview:
                <input class="form-control" type="date" />
            </label>
            <label>
                Time of interview:
                <input class="form-control" type="time" />
            </label>
        
            <label>
                <input type="submit" value="Submit" />
            </label>
        </form>
        
     </Container>
    





    
  )

}

export default Form;