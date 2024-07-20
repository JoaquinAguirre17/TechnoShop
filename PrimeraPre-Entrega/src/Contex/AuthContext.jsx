
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (token) => {
        console.log('Logging in with token:', token); 
        setIsAuthenticated(true);
        localStorage.setItem('authToken', token); 
    };

    const logout = () => {
        console.log('Logging out');
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
    };

    // Verificar el estado actual
    console.log('isAuthenticated:', isAuthenticated);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

