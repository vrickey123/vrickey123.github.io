import { Button, Card } from 'react-bootstrap';

function OpenSourceCard(props) {
    var cardBody;
    if (props.hasPlayStoreLink) {
        cardBody = <CardBodyGithubAndGoogleButtons title={props.title} summary={props.summary} />;
    } else {
        cardBody = <CardBodyGithubButton title={props.title} summary={props.summary} />;
    }
    return (
        <Card style={{ width: '18rem' }} bg="light" className="mb-2">
            <Card.Header className="text-muted">{props.header}</Card.Header>
            {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
            {cardBody}
        </Card>
    );
}

const CardBodyGithubButton = (props) => (
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Button variant="primary">GitHub</Button>
    </Card.Body>
);

const CardBodyGithubAndGoogleButtons = (props) => (
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Button variant="primary" className="mr-1">GitHub</Button>
        <Button variant="secondary" className="ml-1">Google Play</Button>
    </Card.Body>
);

export default OpenSourceCard;