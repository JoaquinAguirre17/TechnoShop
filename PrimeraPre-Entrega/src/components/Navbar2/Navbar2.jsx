
import { Link } from 'react-router-dom'; 
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaHome } from 'react-icons/fa'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import './Navbar2.css'; 
import { useState } from 'react';



function NavbarOffcanvas() {
// Estado para controlar si el Offcanvas está abierto o cerrado
  const [show, setShow] = useState(false);

   {/* // Handler para cuando se hace clic en el enlace, y cerrar el Offcanvas*/}
  const handleLinkClick = () => {
    setShow(false); // Cierra el Offcanvas
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        {/* Marca del Navbar */}
        <Navbar.Brand href="/" className="custom-brand">
          <img className="logo" src="/img/fondo1.png" alt="Logo" />
        </Navbar.Brand>

        {/* Botón para togglear Offcanvas */}
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          className="custom-toggle" 
          onClick={() => setShow(!show)} // Cambia el estado al hacer clic
        />

        {/* Offcanvas para menús móviles */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="custom-offcanvas"
          show={show} // Vincula el estado show con la visibilidad del Offcanvas
          onHide={() => setShow(false)} // Cierra el Offcanvas cuando se hace clic fuera de él
        >
          <Offcanvas.Header closeButton className="custom-offcanvas-header">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="custom-title">
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bodycanvas">
            {/* Ícono para ir al Home */}
            <Nav className="ms-auto custom-nav">
              <Nav.Link as={Link} to="/" className="custom-icon" onClick={handleLinkClick}>
                <FaHome size={24} />
              </Nav.Link>
            </Nav>

            {/* Navegación personalizada con categorías y subcategorías */}
            <Nav className="ms-auto custom-nav">
              {/* Botón de la categoría "Telefonía" con Dropdown */}
              <ButtonGroup className="split-btn-group">
              <LinkContainer to="/Telefonia" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >TELEFONIA</Button>
              </LinkContainer>
              <Dropdown >
                <Dropdown.Toggle className="split-dropdown-toggle"  id="dropdown-telefonia" />
                <Dropdown.Menu>
                  <LinkContainer to="/telefonia/cargadores" onClick={handleLinkClick}>
                    <Dropdown.Item>Cargadores</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/telefonia/cables" onClick={handleLinkClick}>
                    <Dropdown.Item>Cables</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/telefonia/fundas" onClick={handleLinkClick}>
                    <Dropdown.Item>Fundas</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/telefonia/accesorios" onClick={handleLinkClick}>
                    <Dropdown.Item>Accesorios</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/telefonia/templados-hidrogel" onClick={handleLinkClick}>
                    <Dropdown.Item>Vidrios-Hidrogel</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/telefonia/soporte-auto" onClick={handleLinkClick}>
                    <Dropdown.Item>Soporte-Auto</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>

              {/* Botón de la categoría "Gamer" con Dropdown */}
              <ButtonGroup className="split-btn-group">
              <LinkContainer to="/gamer" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >GAMER</Button>
              </LinkContainer>
              <Dropdown >
                <Dropdown.Toggle className="split-dropdown-toggle"  id="dropdown-gamer" />
                <Dropdown.Menu>
                  <LinkContainer to="/gamer/consolas" onClick={handleLinkClick}>
                    <Dropdown.Item>Consolas</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gamer/maouses" onClick={handleLinkClick}>
                    <Dropdown.Item>Mouse</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gamer/teclados" onClick={handleLinkClick}>
                    <Dropdown.Item>Teclados</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gamer/web-cam" onClick={handleLinkClick}>
                    <Dropdown.Item>Web Cam</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gamer/cables-consolas" onClick={handleLinkClick}>
                    <Dropdown.Item>Cables-Consolas</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>

              {/* Botón de la categoría "Electrónica" con Dropdown */}
              <ButtonGroup className="split-btn-group">
              <LinkContainer to="/Electrónica" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >ELECTRONICA</Button>
              </LinkContainer>
              <Dropdown >
                <Dropdown.Toggle className="split-dropdown-toggle"  id="dropdown-electronica" />
                <Dropdown.Menu>
                  <LinkContainer to="/Electronica/Auriculares" onClick={handleLinkClick}>
                    <Dropdown.Item>Auriculares</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Electronica/Iluminacion" onClick={handleLinkClick}>
                    <Dropdown.Item>Iluminación</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Electronica/Adaptadores" onClick={handleLinkClick}>
                    <Dropdown.Item>Adaptadores</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Electronica/Pendrive" onClick={handleLinkClick}>
                    <Dropdown.Item>Pendrive</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Electronica/MicroSD" onClick={handleLinkClick}>
                    <Dropdown.Item>Micro SD</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Electronica/Parlantes" onClick={handleLinkClick}>
                    <Dropdown.Item>Parlantes</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>

                {/* Relojería */}
            <ButtonGroup className="split-btn-group">
              <LinkContainer to="/Relojes" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >RELOJERIA</Button>
              </LinkContainer>
              <Dropdown >
                <Dropdown.Toggle className="split-dropdown-toggle"  id="dropdown-relojeria" />
                <Dropdown.Menu>
                  <LinkContainer to="/Relojes/montreal" onClick={handleLinkClick}>
                    <Dropdown.Item>Montreal</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Relojes/digitales" onClick={handleLinkClick}>
                    <Dropdown.Item>Digitales</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Relojes/niños" onClick={handleLinkClick}>
                    <Dropdown.Item>Niños</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Relojes/mallas" onClick={handleLinkClick}>
                    <Dropdown.Item>Mallas</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
            </Nav>

            {/* Carrito y Login al final de la barra de navegación */}
            <Nav className="ms-auto custom-end-nav">
              
              <Nav.Link as={Link} to="/login" className="custom-icon" onClick={handleLinkClick}>
                <FaUser size={24} />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarOffcanvas;