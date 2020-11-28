import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar'
import './App.css';
import ResumeItem from './components/ResumeItem';
import OpenSourceCard from './components/OpenSourceCard'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <TopNavBar />
          <h1>WSJ</h1>
          <ResumeItem title="Redesign" summary="Redesign Summary" />
          <ResumeItem title="In-App Purchases and Login" summary="Summary" />
          <h1>Open Source</h1>
          <Row>
            <Col>
              <CardDeck>
                <OpenSourceCard header="Android" title="Leap for WaniKani" summary="Leap for WaniKani Summary" />
                <OpenSourceCard header="Web" title="Resume Website" summary="Resume Website Summary" />
                <OpenSourceCard header="Android" title="Adapter Delegate Cards" summary="Adapter Delegate Cards Summary" />
                <OpenSourceCard header="Android" title="Twitter Username RxJava" summary="Twitter Username RxJava Summary" />
              </CardDeck>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
