// src/Contex/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (token) => {
        localStorage.setItem('token', token); // Almacena el token en localStorage
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token'); // Elimina el token al cerrar sesión
        setIsAuthenticated(false);
    };

    const value = {
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

