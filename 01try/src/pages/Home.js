import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home(){
    return (
        <div class = "cardsHome">
            <Card>
                <Card.Body>
                    <Card.Title>Home</Card.Title>
                    <Card.Text>
                        Welcome to the Home Page
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Home</Card.Title>
                    <Card.Text>
                        Welcome to the Home Page
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}