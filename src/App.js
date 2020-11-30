import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar'
import './App.css';
import Strings from './strings';
import OpenSourceCard from './components/OpenSourceCard'
import LandingPage from './components/LandingPage'
import LeftAlignedResumeItem from './components/LeftAlignedResumeItem';
import RightAlignedResumeItem from './components/RightAlignedResumeItem';
import Footer from './components/Footer';
import Divider from './components/Divider';
import imgAndroidP from './assets/panel-android-p.png';
import imgArAd from './assets/panel-ar-ad.png';
import imgLogin from './assets/panel-login.png';
import imgPerformance from './assets/panel-performance.png';
import imgRedesign from './assets/panel-redesign.png';

function App() {
  return (
    <div>
      <TopNavBar resumeUrl={Strings.URL_RESUME} />
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 0 }}>
            <LandingPage title={Strings.NAME} summary={Strings.ABOUT} />
          </Col>
        </Row>
        <h2 class="display-2" id="wsj">{Strings.WSJ}</h2>
        <Row>
          <Col className="justify-content-around">
            <LeftAlignedResumeItem title={Strings.REDESIGN_TITLE} subtitle={Strings.REDESIGN_SUBTITLE} summary={Strings.REDESIGN_SUMMARY} img={imgRedesign} />
            <Divider height="2.5px" />
            <RightAlignedResumeItem title={Strings.PURCHASING_TITLE} subtitle={Strings.PURCHASING_SUBTITLE} summary={Strings.PURCHASING_SUMMARY} img={imgLogin}/>
            <Divider height="2.5px" />
            <LeftAlignedResumeItem title={Strings.ARCH_TITLE} subtitle={Strings.ARCH_SUBTITLE} summary={Strings.ARCH_SUMMARY} img={imgPerformance}/>
            <Divider height="2.5px" />
            <RightAlignedResumeItem title={Strings.UI_TITLE} subtitle={Strings.UI_SUBTITLE} summary={Strings.UI_SUMMARY} img={imgAndroidP} />
            <Divider height="2.5px" />
            <LeftAlignedResumeItem title={Strings.GRAPH_TITLE} subtitle={Strings.GRAPH_SUBTITLE} summary={Strings.GRAPH_SUMMARY} img={imgArAd} />
          </Col>
        </Row>
        <h2 class="display-2" id="opensource">{Strings.OPEN_SOURCE}</h2>
        <Row>
          <Col>
            <CardDeck>
              <OpenSourceCard header={Strings.ANDROID} title={Strings.LFWK_NAME} summary={Strings.LFWK_SUMMARY} gitHubUrl={Strings.URL_GITHUB_LFWK} playStoreUrl={Strings.URL_PLAY_LFWK} />
              <OpenSourceCard header={Strings.WEB} title={Strings.RESUME_TITLE} summary={Strings.RESUME_SUMMARY} gitHubUrl={Strings.URL_GITHUB_RESUME} />
              <OpenSourceCard header={Strings.ANDROID} title={Strings.ADAPTER_TITLE} summary={Strings.ADAPTER_SUMMARY} gitHubUrl={Strings.URL_GITHUB_ADAPTER} />
              <OpenSourceCard header={Strings.ANDROID} title={Strings.TWITTER_TITLE} summary={Strings.TWITTER_SUMMARY} gitHubUrl={Strings.URL_GITHUB_TWITTER} />
            </CardDeck>
          </Col>
        </Row>
      </Container>
      <Footer title={Strings.CONTACT} gitHubUrl={Strings.URL_GITHUB} linkedInUrl={Strings.URL_LINKEDIN} />
    </div>
  );
}

export default App;
