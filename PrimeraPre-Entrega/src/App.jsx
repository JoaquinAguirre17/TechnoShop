import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './Contex/AuthContext';
import Login from './components/login/login';
import ProductManagement from './components/ProductManagement/ProductManagement';
import PrivateRoute from './components/login/PrivateRoute'; // Asegúrate de que esta ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';
import Electronica from './components/Electronica/Electronica';
import Relojeria from './components/Relojeria/Relojeria';
import Telefonia from './components/Telefonia/Telefonia';
import Gamer from './components/Gamer/Gamer';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';



function App() {
    return (
        <AuthProvider>

            <BrowserRouter>
                <NavBar />

                <div className='presentacionhome'>
                    <img className='imgpresentacion' src="/public/img/fondo1.png" alt="" />
                    <h1 className='presentacion'>TECHNO SHOP</h1>
                </div>
               
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/electronica' element={<Electronica />} />
                    <Route path='/relojeria' element={<Relojeria />} />
                    <Route path='/telefonia' element={<Telefonia />} />
                    <Route path='/gamer' element={<Gamer />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin' element={<PrivateRoute element={<ProductManagement />} />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
