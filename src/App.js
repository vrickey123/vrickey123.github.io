import './App.css';
import Strings from './res/strings';
import Dimens from './res/dimens';
import { Alert, Container, Image, Row, Col, CardDeck } from 'react-bootstrap';
import StretchedLinkedData from './data/StretchedLinkData';
import TableContent from './data/TableContent';
import TopNavBar from './ui/TopNavBar';
import OpenSourceCard from './ui/OpenSourceCard';
import LandingPage from './ui/LandingPage';
import LeftAlignedImageContentRow from './ui/LeftAlignedImageContentRow';
import RightAlignedImageContentRow from './ui/RightAlignedImageContentRow';
import Footer from './ui/Footer';
import Divider from './ui/Divider';
import RightAlignedTableContentRow from './ui/TableContentRow';
import RoleItem from './ui/RoleItem';
import imgMvi from './assets/panel-mvi.png';
import imgLogin from './assets/panel-login.png';
import imgPerformance from './assets/panel-performance.png';
import imgRedesign from './assets/panel-redesign.png';
import imgCompose from './assets/panel-compose.png'
import imgPyramid from './assets/img-test-pyramid.png';
import imgThreeEnv from './assets/img-three-env.png';
import imgMultiApp from './assets/img-multimodule-app.png';
import imgTrunkScale from './assets/img-trunk-scale.png';

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
            <RoleItem
                title={Strings.ROLES_STAFF}
                date={Strings.ROLES_STAFF_DATE}
                summaryOne={Strings.ROLES_STAFF_TEAM}
                summaryTwo={Strings.ROLES_STAFF_APP_PLATFORM}
                summaryThree={Strings.ROLES_STAFF_WEBSHOP} />
            <RoleItem
                title={Strings.ROLES_LEAD}
                date={Strings.ROLES_LEAD_DATE}
                summaryOne={Strings.ROLES_LEAD_MULTIPLATFORM} />
            <RoleItem
                title={Strings.ROLES_SENIOR}
                date={Strings.ROLES_SENIOR_DATE}
                summaryOne={Strings.ROLES_SENIOR_EXPERIMENTAL}
                summaryTwo={Strings.ROLES_SENIOR_LOGIN_SUB} />
            <RoleItem
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
        <h2 class="display-2" id="playbook">{Strings.PLAYBOOK_TITLE}</h2>
        <h4 class="display-4 text-muted" >{Strings.PLAYBOOK_SUBTITLE}</h4>
        <p class="lead">{Strings.PLAYBOOK_DISCOVERY_ART}</p>
        <Row className="mt-5 mb-5">
            <Col className="justify-content-around">
                <h1 >{Strings.PLAYBOOK_DISCOVERY}</h1>
                <h2 class="text-muted">{Strings.PLAYBOOK_DISCOVERY_SUBTITLE}</h2>
                <br></br>
                <h3>{Strings.PLAYBOOK_DISCOVERY_GOAL}</h3>
                <p>{Strings.PLAYBOOK_DISCOVERY_GOAL_LEAD}</p>
                <p>{Strings.PLAYBOOK_DISCOVERY_SUMMARY}</p>
                <h3>{Strings.PLAYBOOK_DISCOVERY_PROCESS}</h3>
                <ol>
                    <li>{Strings.PLAYBOOK_DISCOVERY_KICKOFF}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_BREAKOUT}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_REGROUP}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_REPEAT}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_INTAKE}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_ITERATE}</li>
                </ol>
                <h3>{Strings.PLAYBOOK_DISCOVERY_OUTCOME}</h3>
                <h4 class="text-muted">{Strings.PLAYBOOK_DISCOVERY_PRODUCT}</h4>
                <ul>
                    <li>{Strings.PLAYBOOK_DISCOVERY_PRODUCT_GOAL}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_PRODUCT_EXPERIMENT}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_PRODUCT_ANALYTICS}</li>
                </ul>
                <Alert variant="info">{Strings.PLAYBOOK_DISCOVERY_PRODUCT_WHY}</Alert>
                <h4 class="text-muted">{Strings.PLAYBOOK_DISCOVERY_DESIGN}</h4>
                <ul>
                    <li>{Strings.PLAYBOOK_DISCOVERY_DESIGN_UI}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_DESIGN_UX}</li>
                </ul>
                <Alert variant="info">{Strings.PLAYBOOK_DISCOVERY_DESIGN_WHY}</Alert>
                <h4 class="text-muted">{Strings.PLAYBOOK_DISCOVERY_ENGINEERING}</h4>
                <ul>
                    <li>{Strings.PLAYBOOK_DISCOVERY_ENGINEERING_API}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_ENGINEERING_DIAGRAM}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_ENGINEERING_SUGGESTED}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_ENGINEERING_TWO_PAGER}</li>
                </ul>
                 <Alert variant="info">{Strings.PLAYBOOK_DISCOVERY_ENGINEERING_WHY}</Alert>
                <h4 class="text-muted">{Strings.PLAYBOOK_DISCOVERY_MANAGER}</h4>
                <ul>
                    <li>{Strings.PLAYBOOK_DISCOVERY_GANNT}</li>
                    <li>{Strings.PLAYBOOK_DISCOVERY_TICKET}</li>
                </ul>
                <Alert variant="info">{Strings.PLAYBOOK_DISCOVERY_MANAGER_WHY}</Alert>
                <br></br>
                <h1>{Strings.PLAYBOOK_MULTIMODULE}</h1>
                <h2 class="text-muted">{Strings.PLAYBOOK_MULTIMODULE_SUBTITLE}</h2>
                <br></br>
                <p>{Strings.PLAYBOOK_MULTIMODULE_SUMMARY}</p>
                <ul>
                    <li>{Strings.PLAYBOOK_MULTIMODULE_SEPARATE}</li>
                    <li>{Strings.PLAYBOOK_MULTIMODULE_REUSE}</li>
                    <li>{Strings.PLAYBOOK_MULTIMODULE_BUILD_TIMES}</li>
                    <li>{Strings.PLAYBOOK_MULTIMODULE_DISTRIBUTION}</li>
                </ul>
                <Image fluid src={imgMultiApp} />
                <h1>{Strings.PLAYBOOK_CONTINUOUS_DELIVERY}</h1>
                <h2 class="text-muted">{Strings.PLAYBOOK_THREE_ENV_SUBTITLE}</h2>
                <br></br>
                <h3>{Strings.PLAYBOOK_THREE_ENV_TEST}</h3>
                <p>{Strings.PLAYBOOK_THREE_ENV_LEAD}</p>
                <p>{Strings.PLAYBOOK_THREE_ENV_SUMMARY}</p>
                <Image fluid src={imgThreeEnv} />
                <br></br>
                <br></br>
                <h3>{Strings.PLAYBOOK_APP_BRANCHING_STRATEGY}</h3>
                <p>{Strings.PLAYBOOK_APP_BRANCHING_STRATEGY_LEAD}</p>
                <ul>
                    <li>{Strings.PLAYBOOK_APP_BRANCHING_STRATEGY_BEFORE}</li>
                    <li>{Strings.PLAYBOOK_APP_BRANCHING_STRATEGY_ENSURES}</li>
                    <li>{Strings.PLAYBOOK_APP_BRANCHING_STRATEGY_HOTFIX}</li>
                </ul>
                <Image fluid src={imgTrunkScale} />
                <h6>Source: <a href="https://trunkbaseddevelopment.com">Trunk Based Development</a></h6>
                <br></br>
                <br></br>
                <h1>{Strings.PLAYBOOK_TEST_PYRAMID}</h1>
                <h2 class="text-muted">{Strings.PLAYBOOK_TEST_PYRAMID_SUBTITLE}</h2>
                <p>{Strings.PLAYBOOK_TEST_PYRAMID_SUMMARY}</p>
                <ul>
                    <li>UI | Android runtime | <a href="https://developer.android.com/training/testing/ui-tests">UI Tests (Android Docs)</a> | Verify a user flow by asserting UI hierarchy or screenshot analysis</li>
                    <li>Integration | Android runtime | <a href="https://developer.android.com/training/testing/instrumented-tests">Instrumented Tests (Android Docs)</a> | Verify integration of real API by asserting Response matches an expected Result</li>
                    <li>Unit | Java runtime | <a href="https://developer.android.com/training/testing/local-tests">Unit Tests (Android Docs)</a> | Verify implementation of a function returns expected Result using mock or fakes</li>
                </ul>
                <br></br>
                <Image fluid src={imgPyramid} />
                <h6>Source: <a href="https://anymindgroup.com/news/tech-blog/15053/">AnyMind Tech Blog</a></h6>
                <br></br>
            </Col>
        </Row>
        <h2 class="display-2" id="languages">{Strings.LANGUAGES_TITLE}</h2>
        <Row className="mt-5 mb-5">
          <Col className="justify-content-around">
            <h1 class="text-muted">{Strings.LANGUAGES_COMPUTER}</h1>
            <h1>{Strings.LANGUAGES_KOTLIN}</h1>
            <h2>{Strings.LANGUAGES_JAVA}</h2>
            <h3>{Strings.LANGUAGES_DART}</h3>
            <h4>{Strings.LANGUAGES_JAVASCRIPT}</h4>
            <h5>{Strings.TOOLS_TITLE}</h5>
            <p>{Strings.TOOLS}</p>
            <br></br>
            <h1 class="text-muted">{Strings.LANGUAGES_HUMAN}</h1>
            <h1>{Strings.LANGUAGES_ENGLISH}</h1>
            <h2>{Strings.LANGUAGES_FRENCH}</h2>
            <h3>{Strings.LANGUAGES_JAPANESE}</h3>
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
