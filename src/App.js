import { Container, Row, Col } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar'
import './App.css';
import ResumeItem from './components/ResumeItem';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <TopNavBar />
          <h1>WSJ</h1>
          <ResumeItem title="Redesign" summary="Redesign Summary" />
          <ResumeItem title="In-App Purchases and Login" summary="Summary" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
