import { Container, Row, Col } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar'
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <TopNavBar/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
