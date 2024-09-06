import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footer.css'; // Importamos los estilos CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Techno Shop</h3>
                <p>Encuentra lo último en tecnología a los mejores precios.</p>
                <ul className="socials">
                <li><a href="https://www.instagram.com/technoshop.nc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Techno Shop | Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
