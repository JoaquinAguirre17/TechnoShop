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
                        <LinkContainer to="/electronica">
                            <NavDropdown.Item>VER ELECTRONICA</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="/productos-electronica/auriculares/">Auriculares</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-electronica/iluminacion/">Iluminacion</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-electronica/adaptadores/">Adapatadores</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-electronica/pendrive/">Pendrive</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-electronica/micro-sd/">Micro SD</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-electronica/parlantes/">Parlantes</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="RELOJERIA" className="relojeria-nav-dropdown">
                        <LinkContainer to="/relojeria">
                            <NavDropdown.Item>VER RELOJERIA</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="/productos-relojeria/montreal/">Montreal</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-relojeria/digitales/">Digitales</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-relojeria/niños/">Niños</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-relojeria/mallas/">Mallas</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="TELEFONIA" className="telefonia-nav-dropdown">
                        <LinkContainer to="/telefonia">
                            <NavDropdown.Item>VER TELEFONIA</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="/productos-telefonia/cargadores/">Cargadores</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-telefonia/cables/">Cables</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-telefonia/fundas/">Fundas</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-telefonia/accesorios/">Accesorios</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-telefonia/templados-hidrogel/">Vidrios-Hidrogel</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="GAMER" className="gamer-nav-dropdown">
                        <LinkContainer to="/gamer">
                            <NavDropdown.Item>VER GAMER</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="/productos-gamer/consolas/">Consolas</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-gamer/maouses/">Mouse</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-gamer/teclados/">Teclados</NavDropdown.Item>
                        <NavDropdown.Item href="/productos-gamer/web-cam/">Web Cam</NavDropdown.Item>
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

