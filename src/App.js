import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar'
import './App.css';
import OpenSourceCard from './components/OpenSourceCard'
import LandingPage from './components/LandingPage'
import LeftAlignedResumeItem from './components/LeftAlignedResumeItem';
import RightAlignedResumeItem from './components/RightAlignedResumeItem';

function App() {
  return (
    <div>
      <TopNavBar />
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 0 }}>
            <LandingPage title="Vince Rickey" summary="Software Engineer with five years of experience in Android. Learning Web and iOS." />
          </Col>
        </Row>
        <h2 class="display-2">WSJ</h2>
        <Row>
          <Col className="justify-content-around">
            <LeftAlignedResumeItem title="Redesign" subtitle="Design System and Editorial Tools" summary="" />
            <div class="rounded bg-dark" style={{height: 2.5}}/>
            <RightAlignedResumeItem title="Purchasing and Login" subtitle="Auth0 and Google Play Billing" summary="" />
            <div class="rounded bg-dark" style={{height: 2.5}}/>
            <LeftAlignedResumeItem title="Architecture Discovery" subtitle="MVP, MVVM, MVI" summary="" />
            <div class="rounded bg-dark" style={{height: 2.5}}/>
            <RightAlignedResumeItem title="Server-Driven UI" subtitle="Jetpack Compose and Swift UI" summary="" />
            <div class="rounded bg-dark" style={{height: 2.5}}/>
            <LeftAlignedResumeItem title="Graph QL" subtitle="Unified Data Model" summary="test" />
          </Col>
        </Row>
        <h2 class="display-2">Open Source</h2>
        <Row>
          <Col>
            <Row>
              <CardDeck>
                <OpenSourceCard header="Android" title="Leap for WaniKani" summary="Leap for WaniKani Summary" hasPlayStoreLink="true"/>
                <OpenSourceCard header="Web" title="Resume Website" summary="Resume Website Summary" />
                <OpenSourceCard header="Android" title="Adapter Delegate Cards" summary="Adapter Delegate Cards Summary" />
                <OpenSourceCard header="Android" title="Twitter Username RxJava" summary="Twitter Username RxJava Summary" />
              </CardDeck>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
