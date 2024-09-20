import { Navbar, Container, Nav, NavItem } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">RAIHANFILMS</Navbar.Brand>
        <Nav>
          <NavItem>
            <Nav.Link href="#trending">trending</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#horror">horror</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#upcoming">upcoming</Nav.Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
