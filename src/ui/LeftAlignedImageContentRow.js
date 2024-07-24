import { Row, Col, Image } from 'react-bootstrap'

// Stack the columns on mobile by making xs full-width. 
// Otherwise use half-width md=6.
// Add margin top to xs and s.
const LeftAlignedImageContentRow = (props) => (
    <Row className="mb-5 mt-5">
        <Col xs={12} md={6}>
            <Image fluid src={props.img} />
        </Col>
        <Col xs={12} md={6} className="mt-5 mt-md-0">
            <h1>{props.title}</h1>
            <h2 className="text-muted">{props.subtitle}</h2>
            <p>{props.summary}</p>
        </Col>
    </Row>
);

export default LeftAlignedImageContentRow;