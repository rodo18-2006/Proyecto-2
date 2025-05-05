import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavbarC = () => {
  return (
    <>
    <Navbar expand="lg" className="navbar" collapseOnSelect>
        <Container>
          <img className="logo" src="./img/logo-clinica.png" alt="logo" />
          <Navbar.Brand as={Link} to="/inicio">Inicio</Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/sobrenosotros">Sobre Nosotros</Nav.Link> 
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link> 
              <NavDropdown title="Turnos y más" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/turnos">Turnos</NavDropdown.Item> 
                <NavDropdown.Item as={Link} to="/horarios">Horarios</NavDropdown.Item> 
                <NavDropdown.Item as={Link} to="/atencion">Atención al cliente</NavDropdown.Item> 
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/doctores">Doctores</NavDropdown.Item> 
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </>
  );
};

export default NavbarC;
/*    <Navbar expand="lg" className="navbar" collapseOnSelect>
        <Container>
          <img className="logo" src="./img/logo-clinica.png" alt="logo" />
          <Navbar.Brand href="/inicio">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/SobreNosotros">Sobre Nosotros</Nav.Link>
              <Nav.Link href="/Contacto">Contacto</Nav.Link>
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
      </Navbar>  */