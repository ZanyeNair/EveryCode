import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Stage1(){
    return(
    <div>
        <input type = "text" placeholder='First name'/>
        <input type = "text" placeholder='Last name'/>

        <input type = "text" placeholder='Email'/>
    </div>

    )
}

export default Stage1;