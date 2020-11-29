import { Row, Col, Image } from 'react-bootstrap'

const LeftAlignedResumeItem = (props) => (
    <Row className="justify-content-center mb-5 mt-5">
        <Col>
            <Image src="https://via.placeholder.com/500X500" />
        </Col>
        <Col>
            <h1>{props.title}</h1>
            <h2 className="text-muted">{props.subtitle}</h2>
            <p>{props.summary}</p>
        </Col>
    </Row>
);

export default LeftAlignedResumeItem;