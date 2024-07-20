
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Contex/AuthContext';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    console.log('PrivateRoute isAuthenticated:', isAuthenticated); // Verificar el estado en la ruta privada
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
