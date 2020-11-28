//const { Card } = require("react-bootstrap");
import { Button, Card } from 'react-bootstrap';

const OpenSourceCard = (props) => (
    <Card bg="light">
        <Card.Header>props.header</Card.Header>
        <Card.Img variant="top" src="https://via.placeholder.com/150"/>
        <Card.Body>
            <Card.Title>props.title</Card.Title>
            <Card.Text>props.summary</Card.Text>
            <Button variant="primary">GitHub</Button>
        </Card.Body>
    </Card>
);