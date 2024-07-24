import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Strings from '../res/strings';

const TopNavBar = (props) => (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#vincerickey">{Strings.NAME}</Navbar.Brand>
      <Nav classname="sections">
        <NavLink href="#wsj">{Strings.WSJ}</NavLink>
        <NavLink href="#opensource">{Strings.OPEN_SOURCE}</NavLink>
        <NavLink href="#languages">{Strings.LANGUAGES_TITLE}</NavLink>
      </Nav>
      <Nav>
        <NavLink href={props.resumeUrl}>{Strings.RESUME}</NavLink>
      </Nav>
    </Navbar>
  );

  export default TopNavBar;