import { Row, Col } from 'react-bootstrap'

const Footer = (props) => (
    <Row className="p-5 bg-dark text-white">
        <Col>
            <h1>{props.title}</h1>
            <h3><a href={props.gitHubUrl}>GitHub</a></h3>
            <h3><a href={props.linkedInUrl}>LinkedIn</a></h3>
        </Col>
    </Row>
);

export default Footer;