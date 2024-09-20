import { NavDropdown, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function WuWaNavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" fixed='top' sticky='top'>
        <Container>
          <Navbar.Brand>WuWa Wiki</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>News</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <NavDropdown title="test">
                <NavDropdown.Item>Item 1</NavDropdown.Item>
                <NavDropdown.Item>Item 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default WuWaNavBar;