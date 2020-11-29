import { Button, Card } from 'react-bootstrap';

const OpenSourceCard = (props) => (
    <div>
        <Card style={{ width: '20rem' }} bg="light">
            {/* <Card.Header className="text-muted">{props.header}</Card.Header>
            <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
                <Button variant="primary">GitHub</Button>
            </Card.Body>
        </Card>
    </div>
);

export default OpenSourceCard;