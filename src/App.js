import { Container, Navbar, Row, Col, Nav, NavLink } from 'react-bootstrap';
import './App.css';

const TopNavBar = (props) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#vincerickey">Vince Rickey</Navbar.Brand>
    <Nav classname="sections">
      <NavLink href="#wsj">WSJ</NavLink>
      <NavLink href="opensource">Open Source</NavLink>
      <NavLink href="#wsj">Foreign Languages</NavLink>
    </Nav>
    <Nav>
      <NavLink href="#resume">Resume</NavLink>
    </Nav>
  </Navbar>
);

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
