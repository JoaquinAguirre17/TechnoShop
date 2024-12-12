import React, { useState } from 'react';
import { Navbar, Nav, ButtonGroup, Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaHome, FaUser } from 'react-icons/fa'; // Importa los iconos para Home y Login
import './Navbar.css'; // Asegúrate de tener el archivo CSS

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  // Función para manejar el colapso
  const handleToggle = () => setExpanded(!expanded);

  // Función para cerrar el Offcanvas cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsOffcanvasOpen(false);  // Cierra el Offcanvas en pantallas móviles
    setExpanded(false); // Cierra la navbar tradicional en pantallas grandes
  };

  // Función para evitar el cierre del Offcanvas cuando se abre el desplegable
  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Evita que el clic cierre el Offcanvas
  };

  return (
    <>
      {/* Navbar tradicional para pantallas grandes */}
      <Navbar expand="lg" className="custom-navbar" expanded={expanded}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navegacion">
            {/* Icono Home */}
            <LinkContainer to="/" onClick={handleLinkClick}>
              <button className="icon-btn">
                <FaHome size={24} className="nav-icon" />
              </button>
            </LinkContainer>

            {/* Electrónica */}
            <ButtonGroup className="split-btn-group">
              <LinkContainer to="/Electrónica" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >ELECTRONICA</Button>
              </LinkContainer>
              <Dropdown onClick={handleDropdownClick}>
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
              <Dropdown onClick={handleDropdownClick}>
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

            {/* Telefonía */}
            <ButtonGroup className="split-btn-group">
              <LinkContainer to="/Telefonia" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >TELEFONIA</Button>
              </LinkContainer>
              <Dropdown onClick={handleDropdownClick}>
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

            {/* Gamer */}
            <ButtonGroup className="split-btn-group">
              <LinkContainer to="/gamer" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >GAMER</Button>
              </LinkContainer>
              <Dropdown onClick={handleDropdownClick}>
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

            {/* Icono Login */}
            <LinkContainer to="/login" onClick={handleLinkClick}>
              <button className="icon-btn">
                <FaUser size={24} className="nav-icon" />
              </button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Offcanvas para pantallas pequeñas */}
      <Offcanvas
        show={isOffcanvasOpen}
        onHide={() => setIsOffcanvasOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="navegacion">
            {/* Icono Home */}
            <LinkContainer to="/" onClick={handleLinkClick}>
              <button className="icon-btn">
                <FaHome size={24} className="nav-icon" />
              </button>
            </LinkContainer>

            {/* Electrónica */}
            <ButtonGroup className="split-btn-group">
              <LinkContainer to="/Electrónica" onClick={handleLinkClick}>
                <Button className="split-dropdown-btn" >Electrónica</Button>
              </LinkContainer>
              <Dropdown onClick={handleDropdownClick}>
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
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>

            {/* Más elementos aquí */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
