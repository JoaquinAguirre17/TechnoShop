import './App.css';
import Navar from './components/Navar/Navar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './Contex/AuthContext';
import Login from './components/login/login';
import ProductManagement from './components/ProductManagement/ProductManagement';
import PrivateRoute from './components/login/PrivateRoute'; // Asegúrate de que esta ruta sea correcta

function App() {
    return (
        <AuthProvider>
                <div className='presentacionhome'>
                    <img className='imgpresentacion' src="/public/img/fondo1.png" alt="" />
                    <h1 className='presentacion'>TECHNO SHOP</h1>
                </div>
                <BrowserRouter>
                    <Navar />
                    <div className='container'>
                        <Routes>
                            <Route path='/' />

                            <Route path='/login' element={<Login />} />
                            <Route path='/admin' element={<PrivateRoute element={<ProductManagement />} />} />
                        </Routes>
                    </div>
                </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
