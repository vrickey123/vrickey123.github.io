import { Row, Col, Image, Card } from 'react-bootstrap';

const ResumeItem = (props) => (
    <span class="border border-primary">
        <Col>
            <h1>{props.title}</h1>
            <p>{props.summary}</p>
        </Col>
    </span>
);

export default ResumeItem;