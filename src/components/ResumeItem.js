import { Row, Col, Image } from 'react-bootstrap';

const ResumeItem = (props) => (
    <Col>
        <Row>
            <h2>{props.title}</h2>
        </Row>
        <Row>
            <Col xs={6}>
                <p>{props.summary}</p>
            </Col>
            <Col>
                <Image src="https://via.placeholder.com/300" rounded></Image>
            </Col>
        </Row>
    </Col>
);

export default ResumeItem