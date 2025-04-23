import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar" collapseOnSelect>
        <Container>
          <img  className="logo" src="./img/logo-clinica.png" alt="logo" />
          <Navbar.Brand href="/inicio">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Turnos y más" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Turnos">Turnos</NavDropdown.Item>
                <NavDropdown.Item href="/Horarios">Horarios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Atención al cliente
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Doctores">Doctores</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
