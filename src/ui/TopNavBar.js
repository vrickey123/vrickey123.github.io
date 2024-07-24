import { Navbar, Nav, NavLink } from 'react-bootstrap';
import strings from '../res/strings';

const TopNavBar = (props) => (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#vincerickey">{strings.NAME}</Navbar.Brand>
      <Nav classname="sections">
        <NavLink href="#wsj">{strings.WSJ}</NavLink>
        <NavLink href="#opensource">{strings.OPEN_SOURCE}</NavLink>
      </Nav>
      <Nav>
        <NavLink href={props.resumeUrl}>{strings.RESUME}</NavLink>
      </Nav>
    </Navbar>
  );

  export default TopNavBar;