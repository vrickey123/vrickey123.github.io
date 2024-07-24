import { Button, Card } from 'react-bootstrap';

function OpenSourceCard(props) {
    var cardBody;
    if (props.playStoreUrl) {
        cardBody = <CardBodyGithubAndGoogleButtons title={props.title} summary={props.summary} gitHubUrl={props.gitHubUrl} playStoreUrl={props.playStoreUrl} />;
    } else {
        cardBody = <CardBodyGithubButton title={props.title} summary={props.summary} gitHubUrl={props.gitHubUrl} />;
    }
    return (
        <Card bg="light" className="mt-5 mb-5">
            <Card.Header className="text-muted">{props.header}</Card.Header>
            {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
            {cardBody}
        </Card>
    );
}

const CardBodyGithubButton = (props) => (
    <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Button className="mt-auto" variant="primary" href={props.gitHubUrl}>GitHub</Button>
    </Card.Body>
);

const CardBodyGithubAndGoogleButtons = (props) => (
    <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Button variant="secondary" className="mt-auto" href={props.playStoreUrl}>Google Play</Button>
        <Button variant="primary" className="mt-3" href={props.gitHubUrl}>GitHub</Button>
    </Card.Body>
);

export default OpenSourceCard;