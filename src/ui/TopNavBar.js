import { Navbar, Nav, NavLink, Container } from 'react-bootstrap';
import Strings from '../res/strings';

const TopNavBar = (props) => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#vincerickey">{Strings.NAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink href="#about">{Strings.ABOUT_TITLE}</NavLink>
          <NavLink href="#wsj">{Strings.WSJ}</NavLink>
          <NavLink href="#opensource">{Strings.OPEN_SOURCE}</NavLink>
          <NavLink href="#languages">{Strings.LANGUAGES_TITLE}</NavLink>
          <NavLink href="#playbook">{Strings.PLAYBOOK_TITLE}</NavLink>
          <NavLink href={props.resumeUrl}>{Strings.RESUME}</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNavBar;