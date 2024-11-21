import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';

import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navegacion">
                <LinkContainer to="/">
                    <button className='homebtn'>HOME</button>
                </LinkContainer>
                <NavDropdown title="ELECTRONICA" className="electronica-nav-dropdown">
                    <LinkContainer to="/Electrónica">
                        <NavDropdown.Item>VER ELECTRONICA</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Electronica/Auriculares/">
                        <NavDropdown.Item>Auriculares</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Electronica/Iluminacion/">
                        <NavDropdown.Item>Iluminación</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Electronica/Adaptadores/">
                        <NavDropdown.Item>Adaptadores</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Electronica/Pendrive/">
                        <NavDropdown.Item>Pendrive</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Electronica/MicroSD/">
                        <NavDropdown.Item>Micro SD</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Electronica/Parlantes/">
                        <NavDropdown.Item>Parlantes</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown title="RELOJERIA" className="relojeria-nav-dropdown">
                    <LinkContainer to="/Relojes">
                        <NavDropdown.Item>VER RELOJERIA</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Relojes/montreal/">
                        <NavDropdown.Item>Montreal</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Relojes/digitales/">
                        <NavDropdown.Item>Digitales</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Relojes/niños/">
                        <NavDropdown.Item>Niños</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Relojes/mallas/">
                        <NavDropdown.Item>Mallas</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown title="TELEFONIA" className="telefonia-nav-dropdown">
                    <LinkContainer to="/Telefonia">
                        <NavDropdown.Item>VER TELEFONIA</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/telefonia/cargadores/">
                        <NavDropdown.Item>Cargadores</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/telefonia/cables/">
                        <NavDropdown.Item>Cables</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/telefonia/fundas/">
                        <NavDropdown.Item>Fundas</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/telefonia/accesorios/">
                        <NavDropdown.Item>Accesorios</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/telefonia/templados-hidrogel/">
                        <NavDropdown.Item>Vidrios-Hidrogel</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <NavDropdown title="GAMER" className="gamer-nav-dropdown">
                    <LinkContainer to="/gamer">
                        <NavDropdown.Item>VER GAMER</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gamer/consolas/">
                        <NavDropdown.Item>Consolas</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gamer/maouses/">
                        <NavDropdown.Item>Mouse</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gamer/teclados/">
                        <NavDropdown.Item>Teclados</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gamer/web-cam/">
                        <NavDropdown.Item>Web Cam</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/login">
                    <button className='homebtn'>LOGIN</button>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}

export default NavBar;
