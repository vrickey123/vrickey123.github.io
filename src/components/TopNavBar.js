import { Navbar, Nav, NavLink } from 'react-bootstrap';

const TopNavBar = (props) => (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#vincerickey">Vince Rickey</Navbar.Brand>
      <Nav classname="sections">
        <NavLink href="#wsj">WSJ</NavLink>
        <NavLink href="#opensource">Open Source</NavLink>
      </Nav>
      <Nav>
        <NavLink href={props.resumeUrl}>Resume</NavLink>
      </Nav>
    </Navbar>
  );

  export default TopNavBar;