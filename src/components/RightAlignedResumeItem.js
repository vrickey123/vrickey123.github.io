import { Row, Col, Image } from 'react-bootstrap'

const RightAlignedResumeItem = (props) => (
    <Row className="justify-content-center">
        <Col>
            <h1>{props.title}</h1>
            <p>{props.summary}</p>
        </Col>
        <Col>
            <Image src="https://via.placeholder.com/500X500" />
        </Col>
    </Row>
);

export default RightAlignedResumeItem;