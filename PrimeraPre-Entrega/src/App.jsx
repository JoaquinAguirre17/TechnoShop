import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/login/login';
import ProductManagement from './components/ProductManagement/ProductManagement';
import PrivateRoute from './components/login/PrivateRoute';
import Productos from './components/Productos/Productos';
import { AuthProvider } from './Contex/AuthContext'; // Asegúrate de que la ruta sea correcta
import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Es importante para la funcionalidad de los componentes interactivos
import NavbarOffcanvas from './components/Navbar2/Navbar2';


function App() {
    return (
        <AuthProvider>
            <Router>
                <NavbarOffcanvas/>
                <div className='presentacionhome'>
                    <img className='imgpresentacion' src="/img/Logotipo.png" alt="" />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin' element={<PrivateRoute element={<ProductManagement />} />} />
                    {/* Ruta dinámica para categorías y subcategorías */}
                    <Route path='/:category' element={<Productos />} />
                    <Route path='/:category/:subcategory' element={<Productos />} />
                    <Route path="/detalle/:id" element={<ProductDetail />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;

