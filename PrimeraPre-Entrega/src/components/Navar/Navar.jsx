import './Navar.css'
import CardWidgetComponente from '../CardWidget/CardWidgetComponente'
import BotonComponente from '../Boton/BotonComponente'
function Navar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">

                    <a className="navbar-brand  " href="#">
                        <img src="../../../public/img/fondo1.png" alt="CoderHouse" className='logo'></img>
                        <p>Techno Shop</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <BotonComponente nombre='Electronica' />
                            </li>
                            <li className="nav-item">
                            <BotonComponente nombre='Relojes' />
                            </li>
                            <li className="nav-item">
                            <BotonComponente nombre='Stanley' />
                            </li>
                            <li className="nav-item">
                                <CardWidgetComponente />
                            </li>




                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Navar