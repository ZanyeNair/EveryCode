import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About() {
    //you can create variables that dont get rturned
   const name = "John Doe";
   return (
    <Container>
      <Row>
        <Col>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
            Topic 1
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
           Topic 2
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }}>
            
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    </Container>
        
   );
 }
 
 export default About;
 