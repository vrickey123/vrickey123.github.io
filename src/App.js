import './App.css';
import Strings from './res/strings';
import Dimens from './res/dimens';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import StretchedLinkedData from './data/StretchedLinkData';
import TableContent from './data/TableContent';
import TopNavBar from './ui/TopNavBar'
import OpenSourceCard from './ui/OpenSourceCard'
import LandingPage from './ui/LandingPage'
import LeftAlignedImageContentRow from './ui/LeftAlignedImageContentRow';
import RightAlignedImageContentRow from './ui/RightAlignedImageContentRow';
import Footer from './ui/Footer';
import Divider from './ui/Divider';
import RightAlignedTableContentRow from './ui/TableContentRow';
import RoleContent from './ui/RoleContent';
import imgMvi from './assets/panel-mvi.png';
import imgLogin from './assets/panel-login.png';
import imgPerformance from './assets/panel-performance.png';
import imgRedesign from './assets/panel-redesign.png';
import imgCompose from './assets/panel-compose.png'

function App() {
  return (
    <div>
      <TopNavBar resumeUrl={Strings.URL_RESUME} />
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 0 }}>
            <LandingPage title={Strings.NAME} summary={Strings.LANDING_SUBTITLE} />
          </Col>
        </Row>
        <h2 class="display-2" id="about">{Strings.ABOUT_TITLE}</h2>
        <Row className="mt-5 mb-5">
          <Col className="justify-content-around">
            <p class="lead">{Strings.ABOUT_DESCRIPTION}</p>
            <h5>{Strings.ABOUT_INDUSTRY_ITEM}</h5>
            <ul>
                <li>{Strings.ABOUT_INDUSTRY_SUBITEM_SCALE}</li>
                <li>{Strings.ABOUT_INDUSTRY_SUBITEM_TEST}</li>
                <li>{Strings.ABOUT_INDUSTRY_SUBITEM_ACCESS}</li>
                <li>{Strings.ABOUT_INDUSTRY_SUBITEM_PERFORMANCE}</li>
            </ul>
            <h5>{Strings.ABOUT_INDUSTRY_ITEM_KOTLIN_COMPOSE}</h5>
            <h5>{Strings.ABOUT_INDUSTRY_ITEM_DIRECTION}</h5>
          </Col>
        </Row>
        <h2 class="display-2" id="wsj">{Strings.WSJ}</h2>
        <Row>
          <Col className="justify-content-around">
            <RightAlignedTableContentRow
              title={Strings.KEY_RESULTS_TITLE}
              subtitle={Strings.KEY_RESULTS_SUBTITLE}
              summary={[
                new StretchedLinkedData(Strings.URL_PLAY_WSJ, Strings.KEY_RESULT_PLAY_ANCHOR, Strings.KEY_RESULT_PLAY_TEXT),
                Strings.KEY_RESULT_APP_PLATFORM,
                Strings.KEY_RESULT_TEAM
              ]}
              tableContent={new TableContent()} />
            <h1>{Strings.ROLES_TITLE}</h1>
            <h2 className="text-muted">{Strings.ROLES_SUBTITLE}</h2>
            <br></br>
            <RoleContent
                title={Strings.ROLES_STAFF}
                date={Strings.ROLES_STAFF_DATE}
                summaryOne={Strings.ROLES_STAFF_TEAM}
                summaryTwo={Strings.ROLES_STAFF_APP_PLATFORM}
                summaryThree={Strings.ROLES_STAFF_WEBSHOP} />
            <RoleContent
                title={Strings.ROLES_LEAD}
                date={Strings.ROLES_LEAD_DATE}
                summaryOne={Strings.ROLES_LEAD_MULTIPLATFORM} />
            <RoleContent
                title={Strings.ROLES_SENIOR}
                date={Strings.ROLES_SENIOR_DATE}
                summaryOne={Strings.ROLES_SENIOR_EXPERIMENTAL}
                summaryTwo={Strings.ROLES_SENIOR_LOGIN_SUB} />
            <RoleContent
                title={Strings.ROLES_SOFTWARE}
                date={Strings.ROLES_SOFTWARE_DATE}
                summaryOne={Strings.ROLES_SOFTWARE_REDESIGN} />
            <Divider
              height={Dimens.DIVIDER_HEIGHT} />
            <LeftAlignedImageContentRow
              title={Strings.REDESIGN_TITLE}
              subtitle={Strings.REDESIGN_SUBTITLE}
              summary={Strings.REDESIGN_SUMMARY}
              img={imgRedesign} />
            <Divider
              height={Dimens.DIVIDER_HEIGHT} />
            <RightAlignedImageContentRow
              title={Strings.PURCHASING_TITLE}
              subtitle={Strings.PURCHASING_SUBTITLE}
              summary={Strings.PURCHASING_SUMMARY}
              img={imgLogin} />
            <Divider
              height={Dimens.DIVIDER_HEIGHT} />
            <LeftAlignedImageContentRow
              title={Strings.ARCH_TITLE}
              subtitle={Strings.ARCH_SUBTITLE}
              summary={Strings.ARCH_SUMMARY}
              img={imgMvi} />
            <Divider
              height={Dimens.DIVIDER_HEIGHT} />
            <RightAlignedImageContentRow
              title={Strings.UI_TITLE}
              subtitle={Strings.UI_SUBTITLE}
              summary={Strings.UI_SUMMARY}
              img={imgCompose} />
            <Divider
              height={Dimens.DIVIDER_HEIGHT} />
            <LeftAlignedImageContentRow
              title={Strings.GRAPH_TITLE}
              subtitle={Strings.GRAPH_SUBTITLE}
              summary={Strings.GRAPH_SUMMARY}
              img={imgPerformance} />
          </Col>
        </Row>
        <h2 class="display-2" id="opensource">{Strings.OPEN_SOURCE}</h2>
        <CardDeck>
          <OpenSourceCard
            header={Strings.ANDROID_KOTLIN}
            title={Strings.MET_TITLE}
            summary={Strings.MET_SUMMARY}
            gitHubUrl={Strings.URL_GITHUB_MET} />
          <OpenSourceCard
            header={Strings.ANDROID_KOTLIN}
            title={Strings.COMPOSE_TITLE}
            summary={Strings.COMPOSE_SUMMARY}
            gitHubUrl={Strings.URL_GITHUB_COMPOSE} />
          <OpenSourceCard
            header={Strings.WEB}
            title={Strings.RESUME_TITLE}
            summary={Strings.RESUME_SUMMARY}
            gitHubUrl={Strings.URL_GITHUB_RESUME} />
        </CardDeck>
        <CardDeck>
          <OpenSourceCard
            header={Strings.ANDROID_KOTLIN}
            title={Strings.LFWK_NAME}
            summary={Strings.LFWK_SUMMARY}
            gitHubUrl={Strings.URL_GITHUB_LFWK}
            playStoreUrl={Strings.URL_PLAY_LFWK} />
          <OpenSourceCard
            header={Strings.ANDROID_JAVA}
            title={Strings.ADAPTER_TITLE}
            summary={Strings.ADAPTER_SUMMARY}
            gitHubUrl={Strings.URL_GITHUB_ADAPTER} />
          <OpenSourceCard
            header={Strings.ANDROID_JAVA}
            title={Strings.TWITTER_TITLE}
            summary={Strings.TWITTER_SUMMARY}
            gitHubUrl={Strings.URL_GITHUB_TWITTER} />
        </CardDeck>
        <h2 class="display-2" id="languages">{Strings.LANGUAGES_TITLE}</h2>
        <Row className="mt-5 mb-5">
          <Col className="justify-content-around">
            <h1>{Strings.LANGUAGES_KOTLIN}</h1>
            <h2>{Strings.LANGUAGES_JAVA}</h2>
            <h3>{Strings.LANGUAGES_DART}</h3>
            <h4>{Strings.LANGUAGES_JAVASCRIPT}</h4>
          </Col>
        </Row>
      </Container>
      <Footer
        title={Strings.CONTACT}
        gitHubUrl={Strings.URL_GITHUB}
        linkedInUrl={Strings.URL_LINKEDIN} />
    </div>
  );
}

export default App;
