import { Container, Row, Col, CardDeck, Jumbotron } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar'
import './App.css';
import ResumeItem from './components/ResumeItem';
import OpenSourceCard from './components/OpenSourceCard'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div>
      <TopNavBar />
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 2 }}>
            <LandingPage title="Vince Rickey" summary="Software Engineer with five years of experience in Android. Learning Web and iOS." />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 class="display-2">WSJ</h2>
            <Row>
              <ResumeItem title="Redesign" summary="Redesign Summary" />
              <ResumeItem title="In-App Purchases and Login" summary="Summary" />
              <ResumeItem title="Architecture Discovery: MVP, MVVM, MVI" summary="Summary" />
              <ResumeItem title="Server-Driven UI with Jetpack Compose and Swift UI" summary="Summary" />
              <ResumeItem title="GraphQL and Unified Data Model" summary="Summary" />
            </Row>
            <h2 class="display-2">Open Source</h2>
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
    </div>
  );
}

export default App;
