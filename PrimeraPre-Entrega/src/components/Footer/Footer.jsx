import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Techno Shop</h3>
                    <p>Encuentra lo último en tecnología a los mejores precios. Ofrecemos productos de calidad y las últimas novedades del mercado.</p>
                    <ul className="socials">
                        <li><a href="https://www.instagram.com/technoshop.nc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/technoshop.nc" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/technoshop_nc" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h4>Enlaces útiles</h4>
                    <ul>
                        <li><a href="/about-us">Sobre nosotros</a></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li><a href="/terms">Términos y condiciones</a></li>
                        <li><a href="/privacy">Política de privacidad</a></li>
                    </ul>
                </div>

                <div className="footer-section newsletter">
                    <h4>Suscríbete</h4>
                    <p>Recibe las últimas novedades y ofertas especiales directamente en tu correo.</p>
                    <form action="#">
                        <input type="email" placeholder="Tu email" required />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Techno Shop | Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
