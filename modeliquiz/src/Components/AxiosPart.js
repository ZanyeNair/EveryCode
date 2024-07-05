import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AxiosPart() {
  const [driver, setDriver] = useState('')
  const [country, setCountry] = useState('')

  const getQuote = () => {
    axios.get('https://api.openf1.org/v1/drivers')
    .then(response => {
      console.log(response.data[0].full_name)
      setDriver(response.data[0].full_name)
      setCountry(response.data[0].country_code)

      

    }).catch(error => {
      console.log(error)

    })
    
}
  return (
    
    <div>
      <h1> Hello</h1>
      <button onClick={getQuote}> Get data</button>
      <Card>
        <Container>
          <Row>
            <Col>
              <h1> {driver}</h1>
            </Col>

            <Col>
              <h1> {country}</h1>
            </Col>
          </Row>
        </Container>
        
      </Card>
        
    </div>
  )
}

export default AxiosPart
