import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/login/login';
import ProductManagement from './components/ProductManagement/ProductManagement';
import PrivateRoute from './components/login/PrivateRoute';
import Productos from './components/Productos/Productos';
import { AuthProvider } from './Contex/AuthContext'; // Asegúrate de que la ruta sea correcta
import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <div className='presentacionhome'>
                    <img className='imgpresentacion' src="/img/fondo1.png" alt="" />
                    <h1 className='presentacion'>TECHNO SHOP</h1>
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

