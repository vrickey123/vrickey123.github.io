import { Col, Row } from 'react-bootstrap';

const LandingPage = (props) => (
    <div class="vh-100">
        <h1>{props.title}</h1>
        <hr />
        <h2>{props.summary}</h2>
    </div>
);

export default LandingPage;