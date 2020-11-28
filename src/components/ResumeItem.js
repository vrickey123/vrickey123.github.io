import { Row, Col, Image } from 'react-bootstrap';

const ResumeItem = (props) => (
    <Col>
        <Image src="https://via.placeholder.com/500" rounded></Image>
        <h2>{props.title}</h2>
        <p>{props.summary}</p>
    </Col>
);

export default ResumeItem;