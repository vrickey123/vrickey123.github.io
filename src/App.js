import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar'
import './App.css';
import OpenSourceCard from './components/OpenSourceCard'
import LandingPage from './components/LandingPage'
import LeftAlignedResumeItem from './components/LeftAlignedResumeItem';
import RightAlignedResumeItem from './components/RightAlignedResumeItem';
import Footer from './components/Footer';
import Divider from './components/Divider';

function App() {
  return (
    <div>
      <TopNavBar resumeUrl="https://docs.google.com/document/d/1sODXvbf0u687PYut1KaJKPpaLDFIYJjszgkopTOiOMU/edit?usp=sharing"/>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 0 }}>
            <LandingPage title="Vince Rickey" summary="Software Engineer with five years of experience in Android. Learning Web and iOS." />
          </Col>
        </Row>
        <h2 class="display-2" id="wsj">WSJ</h2>
        <Row>
          <Col className="justify-content-around">
            <LeftAlignedResumeItem title="Redesign" subtitle="Design System and Editorial Tools" summary="" src="/panel-redesign.png" />
            <Divider height="2.5px"/>
            <RightAlignedResumeItem title="Purchasing and Login" subtitle="Auth0 and Google Play Billing" summary="" src="/panel-login.png"/>
            <Divider height="2.5px"/>
            <LeftAlignedResumeItem title="Architecture Discovery" subtitle="MVP, MVVM, MVI" summary="" src="/panel-performance.png"/>
            <Divider height="2.5px"/>
            <RightAlignedResumeItem title="Server-Driven UI" subtitle="Jetpack Compose and Swift UI" summary="" src="/panel-android-p.png"/>
            <Divider height="2.5px"/>
            <LeftAlignedResumeItem title="Graph QL" subtitle="Unified Data Model" summary="test" src="/panel-ar-ad.png"/>
          </Col>
        </Row>
        <h2 class="display-2" id="opensource">Open Source</h2>
        <Row>
          <Col>
            <Row>
              <CardDeck>
                <OpenSourceCard header="Android" title="Leap for WaniKani" summary="Leap for WaniKani Summary" gitHubUrl="https://github.com/vrickey123/LeapForWaniKani" playStoreUrl="https://play.google.com/store/apps/details?id=com.leapsoftware.leapforwanikani&hl=en_US" />
                <OpenSourceCard header="Web" title="Resume Website" summary="Resume Website Summary" gitHubUrl="https://github.com/vrickey123/vrickey123.github.io" />
                <OpenSourceCard header="Android" title="Adapter Delegate Cards" summary="Adapter Delegate Cards Summary" gitHubUrl="https://github.com/vrickey123/AdapterDelegateCards" />
                <OpenSourceCard header="Android" title="Twitter Username RxJava" summary="Twitter Username RxJava Summary" gitHubUrl="https://github.com/vrickey123/TwitterUsername" />
              </CardDeck>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer title="Contact" gitHubUrl="https://github.com/vrickey123" linkedInUrl="https://www.linkedin.com/in/vincentrickey" />
    </div>
  );
}

export default App;
