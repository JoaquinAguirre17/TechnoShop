// src/components/Navar/Navar.js
import './Navar.css';
import BotonComponente from '../Boton/BotonComponente';
import { useAuth } from '../../Contex/AuthContext';

function Navar() {
    const { isAuthenticated } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <BotonComponente ruta='/' nombre='Home' />
                        </li>
                        <li className="nav-item">
                            <BotonComponente ruta='/login' nombre='Login' />
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <BotonComponente ruta='/admin' nombre='Administrar' />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navar;

