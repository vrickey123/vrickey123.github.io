import { Row, Col, Image } from 'react-bootstrap'

const RightAlignedResumeItem = (props) => (
    <Row className="justify-content-center mb-5 mt-5">
        <Col>
            <h1>{props.title}</h1>
            <h2 className="text-muted">{props.subtitle}</h2>
            <p>{props.summary}</p>
        </Col>
        <Col>
            <Image style={{width:"500px"}} src={props.img} />
        </Col>
    </Row>
);

export default RightAlignedResumeItem;