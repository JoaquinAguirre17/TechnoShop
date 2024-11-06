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
                        <NavDropdown.Item href="/Electronica/Auriculares/">Auriculares</NavDropdown.Item>
                        <NavDropdown.Item href="/Electronica/iluminacion/">Iluminacion</NavDropdown.Item>
                        <NavDropdown.Item href="/Electronica/adaptadores/">Adapatadores</NavDropdown.Item>
                        <NavDropdown.Item href="/Electronica/pendrive/">Pendrive</NavDropdown.Item>
                        <NavDropdown.Item href="/Electronica/micro-sd/">Micro SD</NavDropdown.Item>
                        <NavDropdown.Item href="/Electronica/parlantes/">Parlantes</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="RELOJERIA" className="relojeria-nav-dropdown">
                        <LinkContainer to="/Relojes">
                            <NavDropdown.Item>VER RELOJERIA</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="/Relojes/montreal/">Montreal</NavDropdown.Item>
                        <NavDropdown.Item href="/Relojes/digitales/">Digitales</NavDropdown.Item>
                        <NavDropdown.Item href="/Relojes/niños/">Niños</NavDropdown.Item>
                        <NavDropdown.Item href="/Relojes/mallas/">Mallas</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="TELEFONIA" className="telefonia-nav-dropdown">
                        <LinkContainer to="/Telefonia">
                            <NavDropdown.Item>VER TELEFONIA</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="/telefonia/cargadores/">Cargadores</NavDropdown.Item>
                        <NavDropdown.Item href="/telefonia/cables/">Cables</NavDropdown.Item>
                        <NavDropdown.Item href="/telefonia/fundas/">Fundas</NavDropdown.Item>
                        <NavDropdown.Item href="/telefonia/accesorios/">Accesorios</NavDropdown.Item>
                        <NavDropdown.Item href="/telefonia/templados-hidrogel/">Vidrios-Hidrogel</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="GAMER" className="gamer-nav-dropdown">
                        <LinkContainer to="/gamer">
                            <NavDropdown.Item>VER GAMER</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="/gamer/consolas/">Consolas</NavDropdown.Item>
                        <NavDropdown.Item href="/gamer/maouses/">Mouse</NavDropdown.Item>
                        <NavDropdown.Item href="/gamer/teclados/">Teclados</NavDropdown.Item>
                        <NavDropdown.Item href="/gamer/web-cam/">Web Cam</NavDropdown.Item>
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

